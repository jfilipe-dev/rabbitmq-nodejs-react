import { User } from "../model/User";

interface IUsersRepository {
    findByEmail(email: string): User | undefined;
    findById(id: string): User | undefined;
}

export { IUsersRepository };