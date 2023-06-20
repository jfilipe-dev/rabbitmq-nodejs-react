import { OrdersRepository } from "../../repositories/implementations/OrdersRepository";
import { ShowUserOrderController } from "./ShowUserOrderController";
import { ShowUserOrderUseCase } from "./ShowUserOderUseCase";

const orderRepository = OrdersRepository.getInstance();
const showOrderUseCase  = new ShowUserOrderUseCase(orderRepository)
const showOrderController = new ShowUserOrderController(showOrderUseCase);

export { showOrderController };