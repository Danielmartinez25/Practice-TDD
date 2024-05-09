import { ProductService } from "../../services/product-service";

export interface EditProductDependencies {
  products: ProductService;
}
export interface EditProductRequestModel {
  id: string;
  name: string;
  description: string;
  starts: number;
}
export async function editProduct(
  { products }: EditProductDependencies,
  payload: EditProductRequestModel
) {
  const productFound = await products.findById(payload.id);
  if (!productFound) return new Error("Product Not Found");
  await products.edit({ ...payload });
}
