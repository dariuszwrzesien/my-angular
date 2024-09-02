import {
  afterNextRender,
  Component,
  DestroyRef,
  inject,
  viewChild,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [FormsModule],
})
export class LoginComponent {
  private form = viewChild.required<NgForm>('form');
  private destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const savedFrom = JSON.parse(
        window.localStorage.getItem('login-form') || '{}'
      );

      const savedEmail = savedFrom?.email || '';
      setTimeout(() => this.form().controls['email']?.setValue(savedEmail), 1);

      const subscription = this.form()
        .valueChanges?.pipe(debounceTime(500))
        .subscribe((value) => {
          window.localStorage.setItem(
            'login-form',
            JSON.stringify({ email: value.email })
          );
        });

      this.destroyRef.onDestroy(() => subscription?.unsubscribe());
    });
  }

  onSubmit(formData: NgForm) {
    if (formData.invalid) return;

    const email = formData.form.value.email;
    const password = formData.form.value.password;

    // console.log(formData.form);

    formData.form.reset();
  }
}
