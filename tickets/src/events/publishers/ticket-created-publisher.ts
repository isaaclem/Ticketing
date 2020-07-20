import { Publisher, Subjects, TicketCreatedEvent } from '@ilcolloco/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
