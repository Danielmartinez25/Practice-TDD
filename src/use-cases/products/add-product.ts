import { ProductService } from "../../services/product-service";

export interface AddProductDependecies {
  products: ProductService;
}
export interface AddProductRequestModel {
  name: string;
  description: string;
  starts: number;
}

export async function addProduct(
  { products }: AddProductDependecies,
  payload: AddProductRequestModel
) {
  await products.save({
    ...payload,
    id: "123",
  });
}
