import { Directive, AfterViewInit, ElementRef, Input, OnChanges } from '@angular/core';
import { STATUS_COLOR } from './constants/status.constant';

@Directive({
  selector: '[appStatusColor]'
})
export class StatusColorDirective implements OnChanges {
  @Input() public status: string;
  constructor(private element: ElementRef) { }

  public ngOnChanges(): void {
    const { backgroundColor, borderColor } = STATUS_COLOR[this.status];
    this.element.nativeElement.style.background = backgroundColor;
    this.element.nativeElement.style.borderColor = borderColor;
  }
}
