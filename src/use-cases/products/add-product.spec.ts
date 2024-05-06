import { describe, expect, test } from "vitest";
import { addProduct } from "./add-product";
import { mockProductService } from "../../mocks/product-service-mock";

describe("Create product", () => {
  test("with the correct data create the product", async () => {
    const productService = mockProductService();
    await addProduct(
      { products: productService },
      {
        name: "product",
        description: "Description Product",
        starts: 3,
      }
    );
    expect(productService.products.length).toBe(1);
  });
});
