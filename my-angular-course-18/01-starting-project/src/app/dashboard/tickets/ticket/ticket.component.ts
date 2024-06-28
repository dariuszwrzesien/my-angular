import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  ticket = input.required<Ticket>();
  detailsVisible = signal<boolean>(false);
  close = output();

  onToggleDetails() {
    // this.detailsVisible.set(!this.detailsVisible());
    this.detailsVisible.update((prevValue) => !prevValue); // w odróżnienu od powyższego, tutaj mamy dostęp do poprzedniej wartości czyli detailsVisible jako argument w funkcji
  }

  onMarkAsCompleted() {
    this.close.emit();
  }
}
