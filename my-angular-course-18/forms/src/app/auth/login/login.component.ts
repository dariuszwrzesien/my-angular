import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { debounceTime, of } from 'rxjs';

function mustContainQuestionMark(control: AbstractControl) {
  if (control.value.includes('?')) {
    return null;
  }

  return { mustContainQuestionMark: true };
}

function emailIsUnique(control: AbstractControl) {
  // W tym miejscu zwykle wywołujemy zapytanie do serwera, aby sprawdzić, czy email jest unikalny.
  if (control.value !== 'test@example.com') {
    return of(null);
  }

  return of({ emailIsNotUnique: true });
}

const initialEmailValue = '';
const storedForm = window.localStorage.getItem('login-form');
const loadedForm = storedForm
  ? JSON.parse(storedForm)
  : { email: initialEmailValue };

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [ReactiveFormsModule],
})
export class LoginComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  form = new FormGroup({
    email: new FormControl(loadedForm.email, {
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(2),
        mustContainQuestionMark,
      ],
      asyncValidators: [emailIsUnique],
    }),
  });

  ngOnInit() {
    const subscription = this.form.valueChanges
      .pipe(debounceTime(500))
      .subscribe((value) => {
        window.localStorage.setItem(
          'login-form',
          JSON.stringify({ email: value.email })
        );
      });
    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  onSubmit() {
    if (this.form.invalid) return;

    const email = this.form.value.email;
    const password = this.form.value.password;

    this.form.reset();
  }
}
