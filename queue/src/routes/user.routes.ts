import { Router } from "express";
import { signinUserController } from "../Modules/users/useCases/signinUser";

const usersRoutes = Router();

usersRoutes.get("/:email", (req, res) => signinUserController.handle(req, res));

export { usersRoutes };