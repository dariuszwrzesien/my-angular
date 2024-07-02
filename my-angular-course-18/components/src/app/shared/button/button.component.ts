import { Component } from '@angular/core';

@Component({
  selector: 'button[appButton], a[appButton]', //https://angular.dev/guide/components/selectors
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {}
