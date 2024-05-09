import { Product } from "../entities/product";

export interface ProductService {
  save(product: Product): Promise<void>;
  getAll(): Promise<Product[]>;
  delete(id: string): Promise<void>;
}
