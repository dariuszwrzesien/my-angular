import { Component, input, signal, computed, inject, ChangeDetectionStrategy } from '@angular/core';
import { UserType } from '../data/users';
import { TaskType } from '../data/tasks';
import { Task } from './task/task';
import { TaskForm } from './task-form/task-form';
import { TaskStateService } from './task-state.service';

@Component({
  selector: 'app-tasks',
  imports: [Task, TaskForm],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Tasks {
  private taskStateService = inject(TaskStateService);

  user = input.required<UserType>();
  tasks = input.required<TaskType[]>();

  showTaskForm = signal(false);

  usersTasks = computed(() => this.taskStateService.getUserTasks(this.user().id, this.tasks()));

  onAddTask(task: TaskType): void {
    this.taskStateService.addTask(task);
    this.showTaskForm.set(false);
  }

  onCompleteTask(taskId: string): void {
    this.taskStateService.completeTask(taskId);
  }

  toggleTaskForm(): void {
    this.showTaskForm.update((show) => !show);
  }
}
