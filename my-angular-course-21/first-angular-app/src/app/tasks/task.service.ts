import { Injectable, signal, computed } from '@angular/core';
import { TaskType, tasks } from '../data/tasks';
import { NewTaskType } from './task-form/task-form';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks = signal<TaskType[]>(tasks);

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks.set(JSON.parse(tasks));
    }
  }

  private persistTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks()));
  }

  getTasks(): TaskType[] {
    return [...this.tasks()];
  }

  getUserTasks(userId: string): TaskType[] {
    return this.tasks()
      .filter((task) => task.userId === userId)
      .sort((a, b) => {
        if (!a.dueDate && !b.dueDate) return 0;
        if (!a.dueDate) return -1;
        if (!b.dueDate) return 1;
        return new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime();
      });
  }

  addTask(newTask: NewTaskType): void {
    this.tasks.update((tasks) => [
      ...tasks,
      {
        id: new Date().getTime().toString(),
        ...newTask,
      },
    ]);
    this.persistTasks();
  }

  removeTask(taskId: string): void {
    this.tasks.update((tasks) => tasks.filter((t) => t.id !== taskId));
    this.persistTasks();
  }
}
