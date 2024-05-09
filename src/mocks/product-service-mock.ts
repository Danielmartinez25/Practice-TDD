import { Product } from "../entities/product";
import { ProductService } from "../services/product-service";
import { ms } from "../utils/time/ms";

export interface MockedProductService extends ProductService {
  products: Product[];
}

export function mockProductService(
  products: Product[] = []
): MockedProductService {
  return {
    products: [...products],
    async save(product: Product) {
      await ms(100);
      this.products.push(product);
    },
    async getAll() {
      await ms(100);
      return this.products;
    },
    async delete(id: string) {
      await ms(100);
      this.products = this.products.filter((product) => product.id === id);
    },
    async edit(product: Product) {
      await ms(100);
      const productIndex = this.products.findIndex((p) => p.id === product.id);
      this.products.splice(productIndex, 1, product);
    },
    async findById(id: string) {
      await ms(100);
      const productFound = this.products.find((product) => product.id === id);
      return productFound ? productFound : null;
    },
  };
}
