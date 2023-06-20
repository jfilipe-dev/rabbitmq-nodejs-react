import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { SigninUserController } from "./SigninUserController";
import { SigninUserUseCase } from "./SigninUserUseCase";

const teste1 = new UsersRepository();
const teste  = new SigninUserUseCase(teste1)
const signinUserController = new SigninUserController(teste);

export { signinUserController };