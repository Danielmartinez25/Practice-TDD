import { describe, expect, test } from "vitest";
import { addProduct } from "./add-product";
import { mockProductService } from "../../mocks/product-service-mock";
import { mockCryptoService } from "../../mocks/crypto-service-mock";
import { isUUID } from "../../utils/validations/vaildation-utils";

describe("Create product", () => {
  test("with the correct data create the product", async () => {
    const productService = mockProductService();
    const cryptoService = mockCryptoService();
    await addProduct(
      { products: productService, crypto: cryptoService },
      {
        name: "product",
        description: "Description Product",
        starts: 3,
      }
    );
    expect(productService.products.length).toBe(1);
    expect(isUUID(productService.products[0].id)).toBe(true);
    expect(productService.products[0].name).toBe("product");
    expect(productService.products[0].description).toBe("Description Product");
    expect(productService.products[0].starts).toBe(3);
  });
});
