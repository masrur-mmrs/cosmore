import { registerOverriddenValidators } from "@medusajs/medusa"
import { AdminPostProductsProductReq as MedusaAdminPostProductsProductReq } from "@medusajs/medusa/dist/api/routes/admin/products/update-product"
import { AdminPostProductsReq as MedusaAdminPostProductsReq } from "@medusajs/medusa/dist/api/routes/admin/products/create-product";
import { Product as MedusaProduct } from "@medusajs/medusa";
import { IsString, IsObject, IsOptional } from "class-validator"

class AdminPostProductsReq extends MedusaAdminPostProductsReq {
    @IsOptional()
    @IsObject()
    productDetails: Record<string, any>;
  }
  

class AdminPostProductsProductReq extends MedusaAdminPostProductsProductReq {
   @IsObject()
   productDetails: Record<string, any>;
}

class Product extends MedusaProduct {
   @IsObject()
   productDetails: Record<string, any>;
}


registerOverriddenValidators(AdminPostProductsReq);
registerOverriddenValidators(AdminPostProductsProductReq);
registerOverriddenValidators(Product);
