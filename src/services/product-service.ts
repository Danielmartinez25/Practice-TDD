import { Product } from "../entities/product";

export interface ProductService {
  save(product: Product): Promise<void>;
  getAll(): Promise<Product[]>;
  delete(id: string): Promise<void>;
  edit(product: Product): Promise<void>;
  findById(id: string): Promise<Product | null>;
}
