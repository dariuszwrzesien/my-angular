import {
  Component,
  computed,
  DestroyRef,
  inject,
  input,
  OnInit,
} from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterLink,
  RouterOutlet,
  RouterStateSnapshot,
} from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink],
})
export class UserTasksComponent {
  userId = input.required<string>();
  message = input<string>('');
  userName = input<string>('');

  private activeRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.activeRoute.data.subscribe((data) => {
      console.log(data); //{message: string, userName: string}
    });
  }
}

export const resolveUserName: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {
  const usersService = inject(UsersService);
  const userName =
    usersService.getUserName(activatedRoute.paramMap.get('userId') || '') || '';
  return userName;
};

export const resolveTitle: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => resolveUserName(activatedRoute, routerState) + "'s Tasks";
