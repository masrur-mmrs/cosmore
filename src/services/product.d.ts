import { ProductService as MedusaProductService, Product } from "@medusajs/medusa";
declare class ProductService extends MedusaProductService {
    retrieve(productId: string, config?: any): Promise<Product>;
}
export default ProductService;
