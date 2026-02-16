import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, //disable view encapsulation to allow CSS styles to be applied globally
})
export class ControlComponent {
  label = input.required<string>();
}
