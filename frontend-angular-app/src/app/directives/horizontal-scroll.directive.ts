import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHorizontalScroll]',
  standalone: true
})
export class HorizontalScrollDirective {
  constructor(private element: ElementRef) {
    console.warn('HorizontalScrollDirective constructor');
  }
  
  @HostListener("wheel", ["$event"])
  public onScroll(event: WheelEvent) {
    console.warn('onScroll');
    this.element.nativeElement.scrollLeft += event.deltaY;
  }

}
