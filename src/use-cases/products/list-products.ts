import { ProductService } from "../../services/product-service";

export interface ListProductDependencies {
  products: ProductService;
}
export async function listProduct({ products }: ListProductDependencies) {
  return await products.getAll();
}
