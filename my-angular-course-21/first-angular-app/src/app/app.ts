import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { UserType, users } from './data/users';
import { User } from './user/user';

@Component({
  selector: 'app-root',
  imports: [Header, User, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected users = signal<UserType[]>(users);
}
