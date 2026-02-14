import { Component, input } from '@angular/core';
import { UserType } from '../data/users';
import { TaskType } from '../data/tasks';
import { Task } from './task/task';

@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  user = input.required<UserType>();
  tasks = input.required<TaskType[]>();
}
