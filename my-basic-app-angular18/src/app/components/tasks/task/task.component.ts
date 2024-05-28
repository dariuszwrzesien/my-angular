import { Component, Input } from '@angular/core';
import { Task } from 'src/app/data/tasks';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
}
