import { 
    ProductService as MedusaProductService,
    Product,
  } from "@medusajs/medusa"
  
  class ProductService extends MedusaProductService {
    async retrieve(
      productId: string,
      config?: any
    ): Promise<Product> {
      const product = await super.retrieve(productId, config)
      // Ensure productDetails is loaded
      if (product && !product.productDetails) {
        const productRepo = this.manager_.getRepository(Product)
        const fullProduct = await productRepo.findOne({
          where: { id: productId },
          select: ["id", "productDetails"],
        })
        product.productDetails = fullProduct?.productDetails
      }
      return product
    }
  }
  
  export default ProductService