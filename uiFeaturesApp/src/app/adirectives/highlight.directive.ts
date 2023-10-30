import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input()
  appHighlight!: string;
  constructor(private element: ElementRef) { }
  ngOnInit() {
    this.hightLight(this.appHighlight || 'yellow')
  }

  @HostListener('mouseenter')
  public onMouseMove() {
    this.element.nativeElement.style.fontSize ='x-large'
     this.hightLight('lightblue')
  }
  @HostListener('mouseleave')
  public onMouseLeave() {
    this.hightLight('yellow')
  }
  private hightLight(color: string) {
    this.element.nativeElement.style.backgroundColor = color
  }

}
