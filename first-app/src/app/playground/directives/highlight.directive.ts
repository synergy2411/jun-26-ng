import {
  Directive,
  ElementRef,
  Renderer2,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() favColor!: string;

  @HostBinding('style.backgroundColor')
  bgColor: string = 'transparent';

  @HostListener('mouseenter')
  onMouseEnter() {
    this.bgColor = this.favColor;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.bgColor = 'transparent';
  }

  // constructor(private elementRef: ElementRef) {
  //   console.log('Ref : ', this.elementRef.nativeElement);
  //   this.elementRef.nativeElement.style.backgroundColor = 'lightgrey';
  // }

  // constructor(
  //   private elRef: ElementRef,
  //   private renderer: Renderer2,
  // ) {
  //   this.renderer.setStyle(this.elRef.nativeElement, 'color', 'green');
  // }
}
