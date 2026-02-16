import { Component } from '@angular/core';

@Component({
  /* Using an attribute selector to avoid conflicts with native <button> elements and allow usage like:
  <button appButton>Click me</button>
  It prevents the need to wrap the button component in another element and keeps the markup clean and do not render unnecessary elements in the DOM.
  */
  selector: 'button[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {}
