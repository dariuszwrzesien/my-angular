import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { type Task } from '../task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  imports: [CardComponent, DatePipe],
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() complete = new EventEmitter<Task>();

  onCompleteTask(task: Task) {
    this.complete.emit(task);
  }
}
