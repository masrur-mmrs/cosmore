import { registerOverriddenValidators } from "@medusajs/medusa"
import { AdminPostProductsProductReq as MedusaAdminPostProductsProductReq } from "@medusajs/medusa/dist/api/routes/admin/products/update-product"
import { AdminPostProductsReq as MedusaAdminPostProductsReq } from "@medusajs/medusa/dist/api/routes/admin/products/create-product";
import { IsString } from "class-validator"

class AdminPostProductsReq extends MedusaAdminPostProductsReq {
    @IsString()
    hover_image: string | null;
  }
  

class AdminPostProductsProductReq extends MedusaAdminPostProductsProductReq {
   @IsString()
   customAttribute: string
}

registerOverriddenValidators(AdminPostProductsReq);
registerOverriddenValidators(AdminPostProductsProductReq)