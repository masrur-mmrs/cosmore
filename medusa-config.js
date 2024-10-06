const dotenv = require("dotenv");
const { resolve } = require("path");

let ENV_FILE_NAME = "";
switch (process.env.NODE_ENV) {
    case "production":
        ENV_FILE_NAME = ".env.production";
        break;
    case "staging":
        ENV_FILE_NAME = ".env.staging";
        break;
    case "test":
        ENV_FILE_NAME = ".env.test";
        break;
    case "development":
    default:
        ENV_FILE_NAME = ".env";
        break;
}

try {
    dotenv.config({ path: process.cwd() + "/" + ENV_FILE_NAME });
} catch (e) {}

// CORS when consuming Medusa from admin
const ADMIN_CORS =
    process.env.ADMIN_CORS || "/http://.+/";

// CORS to avoid issues when consuming Medusa from a client
const STORE_CORS = process.env.STORE_CORS || "/http://.+/";

const DATABASE_URL =
    process.env.DATABASE_URL || "postgres://localhost/medusa-starter-default";

const REDIS_URL = process.env.REDIS_URL;

const plugins = [
    `medusa-fulfillment-manual`,
    `medusa-payment-manual`,
    {
        resolve: `@medusajs/file-local`,
        options: {
            upload_dir: "uploads",
        },
    },
    {
        resolve: "@medusajs/admin",
        /** @type {import('@medusajs/admin').PluginOptions} */
        options: {
            autoRebuild: true,
            // outDir: 'public',
            // backend: process.env.MEDUSA_BACKEND_URL,
        },
    },
    {
        resolve: `medusa-plugin-sendgrid`,
        options: {
            api_key: process.env.SENDGRID_API_KEY,
            from: process.env.SENDGRID_FROM,
            order_placed_template: process.env.SENDGRID_ORDER_PLACED_ID,
            localization: {
                "de-DE": { // locale key
                    order_placed_template: process.env.SENDGRID_ORDER_PLACED_ID_LOCALIZED,
                },
            },
        },
    },

    {
        resolve: `medusa-plugin-algolia`,
        options: {
            applicationId: process.env.ALGOLIA_APP_ID,
            adminApiKey: process.env.ALGOLIA_ADMIN_API_KEY,
            settings: {
                products: {
                    indexSettings: {
                        searchableAttributes: ["title", "description"],
                        attributesToRetrieve: [
                            "id",
                            "title",
                            "description",
                            "handle",
                            "thumbnail",
                            "collection_handle",
                        ],
                    },
                },
            },
        }

    },

];

const modules = {
    eventBus: {
        resolve: "@medusajs/event-bus-redis",
        options: {
            redisUrl: process.env.EVENTS_REDIS_URL,
        }
    },
    cacheService: {
        resolve: "@medusajs/cache-redis",
        options: {
            redisUrl: process.env.CACHE_REDIS_URL,
            ttl: 60 * 60,
        }
    },
};

/** @type {import('@medusajs/medusa').ConfigModule["projectConfig"]} */
const projectConfig = {
    jwtSecret: process.env.JWT_SECRET,
    cookieSecret: process.env.COOKIE_SECRET,
    store_cors: STORE_CORS,
    database_url: DATABASE_URL,
    admin_cors: ADMIN_CORS,
    // Uncomment the following lines to enable REDIS
    redis_url: REDIS_URL,
    http_compression: {
        enabled: true,
        level: 6,
        memLevel: 8,
        threshold: 1024,
    },
    database_extra: process.env.NODE_ENV !== "development" ? {
        ssl: {
            rejectUnauthorized: false,
        },
    } : {},
};

/** @type {import('@medusajs/medusa').ConfigModule} */
module.exports = {
    projectConfig,
    plugins,
    modules,
    featureFlags: {
        product_categories: true,
        order_editing: true,
    },
};