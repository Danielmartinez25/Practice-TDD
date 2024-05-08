import { beforeAll, describe, expect, test } from "vitest";
import { addCategory } from "./add-category";
import {
  MockedCategoryService,
  mockCategoryService,
} from "../../mocks/category-service-mock";
import { mockCategory } from "../../utils/test/mock-category";
import { mockCryptoService } from "../../mocks/crypto-service-mock";
import { isUUID } from "../../utils/validations/vaildation-utils";

describe("Add categories", () => {
  let categoryService: MockedCategoryService;
  const crypto = mockCryptoService();
  beforeAll(async () => {
    categoryService = mockCategoryService([
      mockCategory(),
      mockCategory(),
      mockCategory(),
    ]);
  });
  test("With data success create category", async () => {
    await addCategory(
      { categories: categoryService, crypto },
      {
        name: "console",
      }
    );
    expect(categoryService.categories.length).toBe(4);
    expect(isUUID(categoryService.categories[3].id)).toBe(true);
    expect(categoryService.categories[3].name).toBe("console");
  });
});
