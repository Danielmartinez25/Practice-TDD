import { beforeEach, describe, expect, test } from "vitest";
import { deleteProduct } from "./delete-product";
import {
  MockedProductService,
  mockProductService,
} from "../../mocks/product-service-mock";
import { mockProduct } from "../../utils/test/mock-product";

describe("Delete product", () => {
  let productService: MockedProductService;
  beforeEach(async () => {
    productService = mockProductService([mockProduct(), mockProduct()]);
  });
  test("with valid id delete product", async () => {
    let id = productService.products[0].id;
    await deleteProduct({ products: productService }, { id });
    expect(productService.products.length).toBe(1);
  });
});
