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
      ms(100);
      this.products.push(product);
    },
  };
}
