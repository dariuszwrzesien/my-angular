import {
  Component,
  contentChild,
  ContentChild,
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

  // @ContentChild('inputContent') private control?: ElementRef<
  //   HTMLInputElement | HTMLTextAreaElement
  // >; // pobiera element z tagu <inputContent> z pliku html

  private control =
    contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>(
      'inputContent'
    );

  onClick() {
    console.log('Clicked!');
    console.log(this.el.nativeElement);
    console.log(this.control()?.nativeElement);
  }
}
