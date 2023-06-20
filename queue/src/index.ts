import express from "express";
import queue from "./services/queueService";
import cors from "cors";

import { usersRoutes } from "./routes/user.routes";
import { productsRoutes } from "./routes/product.routes";

const app = express();
queue.connect();

app.use(express.json());
app.use(cors())

app.use("/users", usersRoutes);
app.use("/products", productsRoutes);

export { app };

