import { registerOverriddenValidators } from "@medusajs/medusa"
import { AdminPostProductsProductReq as MedusaAdminPostProductsProductReq } from "@medusajs/medusa/dist/api/routes/admin/products/update-product"
import { AdminPostProductsReq as MedusaAdminPostProductsReq } from "@medusajs/medusa/dist/api/routes/admin/products/create-product";
import { IsString, IsObject } from "class-validator"

class AdminPostProductsReq extends MedusaAdminPostProductsReq {
    @IsString()
    customAttribute: string;
    @IsObject()
    productDetails: object;
  }
  

class AdminPostProductsProductReq extends MedusaAdminPostProductsProductReq {
   @IsString()
   customAttribute: string;
   @IsObject()
   productDetails: object;
}

registerOverriddenValidators(AdminPostProductsReq);
registerOverriddenValidators(AdminPostProductsProductReq)