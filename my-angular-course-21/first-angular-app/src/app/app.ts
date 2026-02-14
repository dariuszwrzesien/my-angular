import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { UserType, users } from './data/users';
import { TaskType, tasks } from './data/tasks';
import { User } from './user/user';
import { Tasks } from './tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [Header, User, RouterOutlet, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users = signal<UserType[]>(users);
  tasks = signal<TaskType[]>(tasks);

  selectedUser = signal<UserType | null>(null);
  selectedUserTasks = signal<TaskType[]>([]);

  onSelectUser(userId: string) {
    const user = this.users().find((u) => u.id === userId) || null;
    const tasks = this.tasks().filter((t) => t.userId === userId);
    this.selectedUser.set(user);
    this.selectedUserTasks.set(user ? tasks : []);
  }
}
