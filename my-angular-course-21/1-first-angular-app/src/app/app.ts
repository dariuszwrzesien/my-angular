import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { UserType, users } from './data/users';
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
  selectedUser = signal<UserType | null>(null);

  onSelectUser(userId: string) {
    const user = this.users().find((u) => u.id === userId) || null;
    this.selectedUser.set(user);
  }
}
