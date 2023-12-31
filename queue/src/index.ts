import express from "express";
import cors from "cors";

import { usersRoutes } from "./routes/user.routes";
import { productsRoutes } from "./routes/product.routes";
import { ordersRoutes } from "./routes/order.routes";

const app = express();

app.use(express.json());
app.use(cors())

app.use("/orders", ordersRoutes);
app.use("/users", usersRoutes);
app.use("/products", productsRoutes);

export { app };

