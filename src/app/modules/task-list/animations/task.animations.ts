import { animation, style, animate } from '@angular/animations';

export const enterAnimation = animation([
  style({ height: 0, opacity: 0 }),
  animate('0.3s ease-in', style({ height: '*', opacity: 1 }))
]);

export const leaveAnimation = animation([
  animate('0.3s ease-out', style({ height: '0', opacity: 0 }))
]);
