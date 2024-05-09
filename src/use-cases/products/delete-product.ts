import { ProductService } from "../../services/product-service";

export interface DeleteProductDependencies {
  products: ProductService;
}
export interface DeleteProductRequestModel {
  id: string;
}
export async function deleteProduct(
  { products }: DeleteProductDependencies,
  payload: DeleteProductRequestModel
) {
  return await products.delete(payload.id);
}
