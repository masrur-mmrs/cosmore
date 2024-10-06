export declare module "@medusajs/medusa/dist/models/product" {
    declare interface Product {
      productDetails?: Record<string, any>;
    }
  }

export declare module "@medusajs/medusa/dist/api/routes/admin/products/update-product" {
    declare interface AdminPostProductsProductReq {
      productDetails?: Record<string, any>;
    }
  }

  export declare module "@medusajs/medusa/dist/api/routes/admin/products/get-product" {
    declare interface AdminProductsRes {
      productDetails?: Record<string, any>;
    }
  }

  export declare module "@medusajs/medusa/dist/api/routes/admin/products/get-product" {
    declare interface AdminGetProductParams {
      productDetails?: Record<string, any>;
    }
  }