import { CategoryService } from "../../services/category-service";
import { CryptoService } from "../../services/crypto-service";

export interface AddCategoryDependencies {
  categories: CategoryService;
  crypto: CryptoService;
}
export interface AddCategoryRequestModel {
  name: string;
}
export async function addCategory(
  { categories, crypto }: AddCategoryDependencies,
  payload: AddCategoryRequestModel
) {
  const id = crypto.generateUUID();
  await categories.save({
    ...payload,
    id,
  });
}
