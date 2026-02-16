import { Component, inject, input, output, signal } from '@angular/core';
import { UserType } from '../../data/users';
import { FormsModule } from '@angular/forms';
import { TaskType } from '../../data/tasks';
import { TaskService } from '../task.service';

export type NewTaskType = Omit<TaskType, 'id'>;

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {
  private taskService = inject(TaskService);

  user = input.required<UserType>();
  close = output<void>();

  title = signal('');
  summary = signal('');
  dueDate = signal('');

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    const task: NewTaskType = {
      userId: this.user().id,
      title: this.title(),
      summary: this.summary(),
      dueDate: this.dueDate(),
    };
    this.taskService.addTask(task);
    this.onClose();
  }
}
