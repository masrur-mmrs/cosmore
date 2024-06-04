export declare module "@medusajs/medusa/dist/models/product" {
    declare interface Product {
      customAttribute: string;
      productDetails: Record<string, any>;
    }
  }

export declare module "@medusajs/medusa/dist/api/routes/admin/products/update-product" {  
  declare interface AdminPostProductsProductReq {
    customAttribute: string;
    productDetails: Record<string, any>;
  }
}
