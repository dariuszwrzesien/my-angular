import { Component, input, output } from '@angular/core';
import { TaskType } from '../../data/tasks';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  task = input.required<TaskType>();
  complete = output<string>();

  onComplete() {
    this.complete.emit(this.task().id);
  }
}
