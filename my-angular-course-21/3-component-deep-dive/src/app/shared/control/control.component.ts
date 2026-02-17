import {
  Component,
  ElementRef,
  Host,
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
  encapsulation: ViewEncapsulation.None, //disable view encapsulation to allow CSS styles to be applied globally
  // host: {
  //   class: 'control',
  // },
})
export class ControlComponent {
  @HostBinding('class') className = 'control'; //binduje klasę CSS 'control' do elementu hosta, co pozwala na stosowanie stylów CSS do tego elementu
  @HostListener('click') onClickHost() {
    //nasłuchiwanie zdarzenia click na elemencie hosta i wywołanie metody onClick
    this.onClick();
  }
  label = input.required<string>();
  private el = inject(ElementRef);

  onClick() {
    console.log('Control clicked');
    console.log(this.el.nativeElement); //dostęp do elementu DOM, na którym nasłuchujemy zdarzenia click, i wyświetlenie go w konsoli
  }
}
