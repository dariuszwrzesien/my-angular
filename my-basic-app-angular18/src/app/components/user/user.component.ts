import {
  Component,
  computed,
  Input,
  signal,
  output,
  input,
  Output,
  EventEmitter,
} from '@angular/core';
import { type User } from 'src/app/data/users';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter<User>();

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  // avatar = input.required<string>();
  // name = input.required<string>();
  // select = output<number>();

  // imagePath = computed(() => `assets/users/${this.avatar()}`);

  onSelectUser(user: User) {
    this.select.emit(user);
  }
}
