import { Component, input, signal, computed, inject, ChangeDetectionStrategy } from '@angular/core';
import { UserType } from '../data/users';
import { TaskType } from '../data/tasks';
import { Task } from './task/task';
import { TaskForm } from './task-form/task-form';
import { TaskService } from './task.service';

@Component({
  selector: 'app-tasks',
  imports: [Task, TaskForm],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Tasks {
  private taskService = inject(TaskService);

  user = input.required<UserType>();

  showTaskForm = signal(false);
  usersTasks = computed(() => this.taskService.getUserTasks(this.user().id));

  onAddTask(task: TaskType): void {
    this.taskService.addTask(task);
    this.showTaskForm.set(false);
  }

  onCompleteTask(taskId: string): void {
    this.taskService.removeTask(taskId);
  }

  toggleTaskForm(): void {
    this.showTaskForm.update((show) => !show);
  }
}
