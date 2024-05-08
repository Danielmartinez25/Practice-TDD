import { Category } from "../entities/category";
import { CategoryService } from "../services/category-service";
import { ms } from "../utils/time/ms";

export interface MockedCategoryService extends CategoryService {
  categories: Category[];
}
export function mockCategoryService(
  categories: Category[] = []
): MockedCategoryService {
  return {
    categories: [...categories],
    async save(category: Category) {
      await ms(100);
      this.categories.push(category);
    },
  };
}
