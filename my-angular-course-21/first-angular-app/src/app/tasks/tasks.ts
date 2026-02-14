import { Component, input } from '@angular/core';
import { UserType } from '../data/users';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  user = input<UserType | null>(null);
}
