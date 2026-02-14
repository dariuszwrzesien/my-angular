import { Component, computed, input, output, signal } from '@angular/core';
import { UserType } from '../data/users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  user = input.required<UserType>();
  select = output<string>();

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
