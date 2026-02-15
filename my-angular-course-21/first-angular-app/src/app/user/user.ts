import { Component, computed, input, output, signal } from '@angular/core';
import { UserType } from '../data/users';
import { Card } from '../shared/card/card';

@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  user = input.required<UserType>();
  selected = input.required<boolean>();

  select = output<string>();

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
