import { Publisher, OrderCancelledEvent, Subjects } from '@ilcolloco/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
