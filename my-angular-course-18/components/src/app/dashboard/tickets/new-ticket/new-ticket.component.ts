import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  output,
  viewChild,
  ViewChild,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [FormsModule, ButtonComponent, ControlComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements AfterViewInit {
  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  // lub
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  enteredTitle = '';
  enteredRequest = '';

  add = output<{ title: string; text: string }>();

  ngAfterViewInit(): void {
    console.log('AfterViewInit');
  }

  onSubmit() {
    console.log('Title:', this.enteredTitle);
    console.log('Ticket Text:', this.enteredRequest);
    this.add.emit({ title: this.enteredTitle, text: this.enteredRequest });
    this.resetForm();
  }

  private resetForm() {
    this.enteredTitle = '';
    this.enteredRequest = '';
  }
}
