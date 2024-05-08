import { beforeAll, describe, expect, test } from "vitest";
import { addProduct } from "./add-product";
import {
  MockedProductService,
  mockProductService,
} from "../../mocks/product-service-mock";
import { mockCryptoService } from "../../mocks/crypto-service-mock";
import { isUUID } from "../../utils/validations/vaildation-utils";
import { mockProduct } from "../../utils/test/mock-product";

describe("Create product", () => {
  let productService: MockedProductService;
  const crypto = mockCryptoService();
  beforeAll(async () => {
    productService = mockProductService([mockProduct(), mockProduct()]);
  });
  test("with the correct data create the product", async () => {
    await addProduct(
      { products: productService, crypto },
      {
        name: "product",
        description: "Description Product",
        starts: 3,
      }
    );
    expect(productService.products.length).toBe(3);
    expect(isUUID(productService.products[2].id)).toBe(true);
    expect(productService.products[2].name).toBe("product");
    expect(productService.products[2].description).toBe("Description Product");
    expect(productService.products[2].starts).toBe(3);
  });
});
