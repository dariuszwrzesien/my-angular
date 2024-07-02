import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "a[appSafeLink]",
  standalone: true,
})
export class SafeLinkDirective {
  constructor(private elementRef: ElementRef) {
    console.log("SafeLinkDirective created");
  }

  // @HostListener('click')
  // onClick() {
  //     const link = this.elementRef.nativeElement.href;
  //     if (link.startsWith('https://')) {
  //         window.open(link, '_blank');
  //     } else {
  //         console.error('Unsafe link clicked!');
  //     }
  // }
}
