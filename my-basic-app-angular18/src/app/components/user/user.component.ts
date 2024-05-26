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
import { User } from 'src/app/data/users';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  @Input({ required: true }) id!: number;
  @Input({ required: true }) avatar: string = '';
  @Input({ required: true }) name: string = '';
  @Output() select = new EventEmitter<User>();

  get imagePath() {
    return `assets/users/${this.avatar}`;
  }

  get user(): User {
    return { id: this.id, avatar: this.avatar, name: this.name };
  }

  // avatar = input.required<string>();
  // name = input.required<string>();
  // select = output<number>();

  // imagePath = computed(() => `assets/users/${this.avatar()}`);

  onSelectUser(user: User) {
    this.select.emit(user);
  }
}
