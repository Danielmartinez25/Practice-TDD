import { Product } from "../../entities/product";
import { mockCryptoService } from "../../mocks/crypto-service-mock";
import { faker } from "@faker-js/faker";
const crypto = mockCryptoService();
export function mockProduct(opts?: Partial<Product>): Product {
  return {
    id: crypto.generateUUID(),
    name: faker.person.firstName(),
    description: faker.lorem.paragraph(3),
    starts: faker.number.int(),
    ...opts,
  };
}
