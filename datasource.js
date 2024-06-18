import { DataSource } from "typeorm"

const AppDataSource = new DataSource({
    type: process.env.DATABASE_TYPE,
    port: 5432,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [
        "dist/models/*.ts",
    ],
    migrations: [
        "dist/migrations/*.ts",
    ],
})

export const datasource = AppDataSource