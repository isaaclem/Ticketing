import { Publisher, OrderCreatedEvent, Subjects } from '@ilcolloco/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
