import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, // Style CSS stają się globalne
  host: {
    class: 'control', //przypisuje classe CSSową do hosta teraz wszędzie jak zobaczymy w Inspectorze to będzie <app-control class="control">
    '(click)': 'onClick()', // nasłuchiwanie na eventy
  },
})
export class ControlComponent {
  // @HostBinding('class') className = 'control'; // stary sposób nadawania klasy CSS w host
  // @HostListener('click') onClick() {
  //   console.log('Clicked!');
  // }// nasłuchiwanie na eventy
  label = input.required<string>();
  private el = inject(ElementRef); // daje dostęp do tego elemetnu(komponentu) (host)

  onClick() {
    console.log('Clicked!');
    console.log(this.el.nativeElement);
  }
}
