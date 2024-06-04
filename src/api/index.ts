import { isObject, registerOverriddenValidators } from "@medusajs/medusa"
import { AdminPostProductsProductReq as MedusaAdminPostProductsProductReq } from "@medusajs/medusa/dist/api/routes/admin/products/update-product"
import { AdminPostProductsReq as MedusaAdminPostProductsReq } from "@medusajs/medusa/dist/api/routes/admin/products/create-product";
import { IsString, IsObject } from "class-validator"

class AdminPostProductsReq extends MedusaAdminPostProductsReq {
    @IsString()
    customAttribute: string | null;
    @IsObject()
    productDetails: Record<string, any>;
  }
  

class AdminPostProductsProductReq extends MedusaAdminPostProductsProductReq {
   @IsString()
   customAttribute: string | null;
   @IsObject()
   productDetails: Record<string, any>;
}

registerOverriddenValidators(AdminPostProductsReq);
registerOverriddenValidators(AdminPostProductsProductReq)