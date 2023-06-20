import { Product } from "../model/Product";

interface IProductsRepository {
    findById(id: string): Product | undefined;
}

export { IProductsRepository };