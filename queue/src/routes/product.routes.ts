import { Router } from "express";
import { signinUserController } from "../Modules/users/useCases/signinUser";
import { productsMock } from "../mocks/products";

const productsRoutes = Router();

productsRoutes.get("/", (_, res) => {
    res.status(200).json({products: productsMock});
});

export { productsRoutes };