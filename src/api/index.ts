import { registerOverriddenValidators } from "@medusajs/medusa"
import { AdminPostProductsProductReq as MedusaAdminPostProductsProductReq } from "@medusajs/medusa/dist/api/routes/admin/products/update-product"
import { AdminPostProductsReq as MedusaAdminPostProductsReq } from "@medusajs/medusa/dist/api/routes/admin/products/create-product";
import { IsString, IsObject, IsOptional } from "class-validator"

class AdminPostProductsReq extends MedusaAdminPostProductsReq {
    @IsOptional()
    @IsString()
    customAttribute: string;
    @IsOptional()
    @IsObject()
    productDetails: object;
  }
  

class AdminPostProductsProductReq extends MedusaAdminPostProductsProductReq {
  //  @IsOptional()
   @IsString()
   customAttribute: string;
  //  @IsOptional()
   @IsObject()
   productDetails: object;
}

registerOverriddenValidators(AdminPostProductsReq);
registerOverriddenValidators(AdminPostProductsProductReq)