import { beforeEach, describe, expect, test } from "vitest";
import { editProduct } from "./edit-product";
import {
  MockedProductService,
  mockProductService,
} from "../../mocks/product-service-mock";
import { mockProduct } from "../../utils/test/mock-product";

describe("Edit product", () => {
  let productService: MockedProductService;
  beforeEach(async () => {
    productService = mockProductService([
      mockProduct(),
      mockProduct(),
      mockProduct(),
    ]);
  });
  test("With valid id edit product", async () => {
    const id = productService.products[0].id;
    await editProduct(
      { products: productService },
      {
        id: id,
        name: "new name",
        description: "new description",
        starts: 2,
      }
    );
    expect(productService.products[0].name).toBe("new name");
    expect(productService.products[0].description).toBe("new description");
    expect(productService.products[0].starts).toBe(2);
  });
  test("With invalid id return Error", async () => {
    const result = await editProduct(
      { products: productService },
      {
        id: "1",
        name: "new name",
        description: "new description",
        starts: 2,
      }
    );
    expect(result).toBeInstanceOf(Error);
  });
});
