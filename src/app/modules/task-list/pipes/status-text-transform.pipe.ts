import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusTextTransform',
})
export class StatusTextTransformPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'in_work':
        return 'В работе';
      case 'expired':
        return 'Просрочена';
      case 'completed':
        return 'Успешно';
    }
    return 'Статус неопределен!!!'
  }
}
