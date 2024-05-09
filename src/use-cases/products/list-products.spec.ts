import { beforeAll, beforeEach, describe, expect, test } from "vitest";
import { listProduct } from "./list-products";
import {
  MockedProductService,
  mockProductService,
} from "../../mocks/product-service-mock";
import { mockProduct } from "../../utils/test/mock-product";
describe("List product", () => {
  let productsService: MockedProductService;
  beforeEach(async () => {
    productsService = mockProductService([
      mockProduct(),
      mockProduct(),
      mockProduct(),
    ]);
  });
  test("List all product", async () => {
    const result = await listProduct({ products: productsService });
    expect(result.length).toBe(3);
  });
});
