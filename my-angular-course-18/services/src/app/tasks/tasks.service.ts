import { inject, Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from './task.model';
import { LoggingService } from '../logging.service';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = signal<Task[]>([]);
  private loggingService = inject(LoggingService);
  allTasks = this.tasks.asReadonly();

  onAddTask(task: { title: string; description: string }) {
    this.tasks.update((oldTasks) => [
      ...oldTasks,
      {
        id: Math.random().toString(),
        title: task.title,
        description: task.description,
        status: 'OPEN',
      },
    ]);
    this.loggingService.log('Task added');
  }

  updateTaskStatus(taskId: string, status: TaskStatus) {
    this.tasks.update((oldTasks) =>
      oldTasks.map((task) => (task.id === taskId ? { ...task, status } : task))
    );
    this.loggingService.log('Task status updated');
  }
}
