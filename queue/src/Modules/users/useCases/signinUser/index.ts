import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { SigninUserController } from "./SigninUserController";
import { SigninUserUseCase } from "./SigninUserUseCase";

const userRepository = new UsersRepository();
const signinUserUseCase  = new SigninUserUseCase(userRepository)
const signinUserController = new SigninUserController(signinUserUseCase);

export { signinUserController };