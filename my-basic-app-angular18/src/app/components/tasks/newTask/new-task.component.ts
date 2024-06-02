import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
  imports: [FormsModule],
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: number;
  @Output() add = new EventEmitter<Task>();
  @Output() close = new EventEmitter<void>();

  title = '';
  summary = '';
  dueDate = '';

  onAddTask(task: Task) {
    this.add.emit(task);
  }

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    const task: Task = this.createNewTask();
    this.add.emit(task);
    this.close.emit();
  }

  private createNewTask(): Task {
    return {
      id: this.generateUniqueId(),
      userId: this.userId,
      title: this.title,
      summary: this.summary,
      dueDate: this.dueDate,
    };
  }

  private generateUniqueId(): string {
    return `${Date.now().toString(36)}${Math.random().toString(36)}`;
  }
}
