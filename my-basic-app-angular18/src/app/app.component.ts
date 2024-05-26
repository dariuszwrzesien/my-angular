import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import users, { User } from './data/users';
import { TasksComponent } from './components/tasks/tasks.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterModule, HeaderComponent, UserComponent, TasksComponent],
})
export class AppComponent {
  users = users;
  selectedUser: User | null = null;

  onSelectUser(user: User) {
    this.selectedUser = user;
  }
}
