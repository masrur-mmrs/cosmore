import type { MedusaRequest, MedusaResponse } from "@medusajs/medusa";
import { EntityManager } from "typeorm";
import ProductService from "../../../services/product";

export async function GET(req: MedusaRequest, res: MedusaResponse) {
  const productService: ProductService = req.scope.resolve("productService");
  const { id } = req.params;

  try {
    const product = await productService.retrieve(id);
    res.status(200).json({ product });
  } catch (error) {
    res.status(404).json({ message: "Product not found" });
  }
}

export async function POST(req: MedusaRequest, res: MedusaResponse) {
  const productService: ProductService = req.scope.resolve("productService");
  const manager: EntityManager = req.scope.resolve("manager");
  const { id } = req.params;

  try {
    const updatedProduct = await manager.transaction(async (transactionManager) => {
      return await productService
        .withTransaction(transactionManager)
        .update(id, req.body);
    });

    res.status(200).json({ product: updatedProduct });
  } catch (error) {
    res.status(400).json({ message: "Error updating product", error: error.message });
  }
}