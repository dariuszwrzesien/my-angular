import { Component, inject, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { User } from 'src/app/data/users';
import { NewTaskComponent } from './newTask/new-task.component';
import { type Task } from './task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  imports: [TaskComponent, NewTaskComponent],
})
export class TasksComponent {
  @Input({ required: true }) user!: User;

  private tasksService = inject(TasksService);
  isAddingNewTaskVisible = false;

  get userTasks() {
    return this.tasksService.getUserTasks(this.user.id);
  }

  onAddNewTask(task: Task) {
    this.tasksService.addTask(task);
  }

  onShowNewTaskForm() {
    this.isAddingNewTaskVisible = true;
  }

  onCloseNewTaskForm() {
    this.isAddingNewTaskVisible = false;
  }

  onCompleteTask(task: Task) {
    this.tasksService.deleteTask(task.id);
  }
}
