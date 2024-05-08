import { Category } from "../entities/category";

export interface CategoryService {
  save(category: Category): Promise<void>;
}
