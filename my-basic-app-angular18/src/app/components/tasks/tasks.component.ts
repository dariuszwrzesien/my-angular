import { Component, Input } from '@angular/core';
import tasks, { type Task } from 'src/app/data/tasks';
import { TaskComponent } from './task/task.component';
import { User } from 'src/app/data/users';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  imports: [TaskComponent],
})
export class TasksComponent {
  @Input({ required: true }) user!: User;
  tasks: Task[] = tasks;

  get userTasks() {
    return this.tasks.filter((task) => task.userId === this.user?.id);
  }

  onAddTask() {
    console.log('Add task');
  }
}
