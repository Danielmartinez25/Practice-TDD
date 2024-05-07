import { CryptoService } from "../../services/crypto-service";
import { ProductService } from "../../services/product-service";

export interface AddProductDependecies {
  products: ProductService;
  crypto: CryptoService;
}
export interface AddProductRequestModel {
  name: string;
  description: string;
  starts: number;
}

export async function addProduct(
  { products, crypto }: AddProductDependecies,
  payload: AddProductRequestModel
) {
  const id = crypto.generateUUID();
  await products.save({
    ...payload,
    id,
  });
}
