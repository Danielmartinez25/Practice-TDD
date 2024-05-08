import { faker } from "@faker-js/faker";
import { Category } from "../../entities/category";
import { mockCryptoService } from "../../mocks/crypto-service-mock";
const crypto = mockCryptoService();
export function mockCategory(opts?: Partial<Category>): Category {
  return {
    id: crypto.generateUUID(),
    name: faker.company.name(),
    ...opts,
  };
}
