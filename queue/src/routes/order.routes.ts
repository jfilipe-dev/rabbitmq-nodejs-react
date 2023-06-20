import { Router } from "express";
import { createOrderController } from "../Modules/orders/useCases/createOrder";
import { showOrderController } from "../Modules/orders/useCases/showUserOrder";

const ordersRoutes = Router();

ordersRoutes.post("/", (req, res) => createOrderController.handle(req, res));
ordersRoutes.get("/:userId/:orderId", (req, res) => showOrderController.handle(req, res));

export { ordersRoutes };