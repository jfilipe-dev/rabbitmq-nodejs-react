import express from "express";
import queue from "./services/queueService";

import { usersRoutes } from "./routes/user.routes";

const app = express();
queue.connect();

app.use(express.json());

app.use("/users", usersRoutes);

export { app };

