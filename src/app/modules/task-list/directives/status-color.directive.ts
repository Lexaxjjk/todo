import { Directive, AfterViewInit, ElementRef, Input } from '@angular/core';
import { STATUS_COLOR } from './constants/status.constant';

@Directive({
  selector: '[appStatusColor]'
})
export class StatusColorDirective implements AfterViewInit {
  @Input() public status: string;
  constructor(private element: ElementRef) { }

  public ngAfterViewInit(): void {
    const { backgroundColor, borderColor } = STATUS_COLOR[this.status];
    this.element.nativeElement.style.background = backgroundColor;
    this.element.nativeElement.style.borderColor = borderColor;
  }
}
