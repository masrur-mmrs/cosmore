export default async function () {
    const imports = (await import(
      "@medusajs/medusa/dist/api/routes/admin/products/index"
    )) as any
    imports.allowedAdminproductsFields = [
      ...imports.allowedAdminproductsFields,
      "customAttribute",
      "productDetails",
    ]
    imports.defaultAdminProductsFields = [
      ...imports.defaultAdminProductsFields,
      "customAttribute",
      "productDetail"
    ]
  }