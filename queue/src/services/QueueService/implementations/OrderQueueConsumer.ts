import { Channel, ConsumeMessage } from "amqplib";
import { IQueueConsumer } from "../IQueueConsumer";
import { Order } from "../../../Modules/orders/model/Order";
import { OrdersRepository } from "../../../Modules/orders/repositories/implementations/OrdersRepository";

class OrderQueueConsumer implements IQueueConsumer {
    name: string;
    channel: Channel;

    constructor(name: string, channel: Channel) {
        this.name = name;
        this.channel = channel;
    }

    consumer = () => (msg: ConsumeMessage | null): void => {
        if (msg && this.channel) {
            const order: Order = JSON.parse(msg.content.toString());

            const orderRepository = OrdersRepository.getInstance();

            orderRepository.approveOrder(order.id);

            this.channel.ack(msg);
        }
    }

    async init() {
        await this.channel.assertQueue(this.name);
        await this.channel.consume(this.name, this.consumer())
    }
}

export { OrderQueueConsumer };