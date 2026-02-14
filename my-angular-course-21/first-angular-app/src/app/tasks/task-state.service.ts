import { Injectable, signal, computed } from '@angular/core';
import { TaskType } from '../data/tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskStateService {
  private newTasks = signal<TaskType[]>([]);
  private completedTaskIds = signal<Set<string>>(new Set());

  addTask(task: TaskType): void {
    this.newTasks.update((tasks) => [...tasks, task]);
  }

  completeTask(taskId: string): void {
    this.completedTaskIds.update((ids) => new Set(ids).add(taskId));
  }

  getUserTasks(userId: string, initialTasks: TaskType[]): TaskType[] {
    const completedIds = this.completedTaskIds();
    const allTasks = [...initialTasks, ...this.newTasks()];
    return allTasks.filter((task) => task.userId === userId && !completedIds.has(task.id));
  }

  resetNewTasks(): void {
    this.newTasks.set([]);
  }

  resetCompletedTasks(): void {
    this.completedTaskIds.set(new Set());
  }
}