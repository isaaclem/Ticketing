import { Publisher, Subjects, TicketUpdatedEvent } from '@ilcolloco/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
