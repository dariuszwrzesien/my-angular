import { Component, input, output } from '@angular/core';
import { TaskType } from '../../data/tasks';
import { Card } from '../../shared/card/card';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
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
