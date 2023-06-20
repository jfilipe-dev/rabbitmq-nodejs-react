import { User } from "../../users/model/User";
import { Order } from "../model/Order";

interface IOrdersRepository {
    create(order: Order): void;
    findByUserAndId(userId: string, orderId: string): Order | undefined;
}

export { IOrdersRepository };