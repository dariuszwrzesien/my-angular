import { Component, input } from '@angular/core';
import { UserType } from '../data/users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  user = input<UserType>();
}
