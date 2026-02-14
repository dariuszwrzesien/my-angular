import { Component, input, output } from '@angular/core';
import { UserType } from '../../data/users';

@Component({
  selector: 'app-task-form',
  imports: [],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {
  user = input.required<UserType>();
  close = output<void>();

  onClose() {
    this.close.emit();
  }
}
