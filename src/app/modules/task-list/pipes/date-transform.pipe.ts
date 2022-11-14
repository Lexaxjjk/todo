import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTransform',
})
export class DateTransformPipe implements PipeTransform {
  transform(value: Date): string {
    const msecPerMinute = 1000 * 60; // милисекунд в минуте
    const msecPerHour = msecPerMinute * 60; // милисекунд в часе
    const msecPerDay = msecPerHour * 24; // милисекунд в дне
    const msecPerWeek = msecPerDay * 7; // милисекунд в неделе
    const msecPerMonth = msecPerDay * 30; // милисекунд в месяце
    const msecPerYear = msecPerMonth * 12; // милисекунд в году

    const today = new Date();
    const startDate = new Date(value);

    let interval = today.getTime() - startDate.valueOf();

    const year = Math.floor(interval / msecPerYear);
    interval = interval - year * msecPerYear;

    const month = Math.floor(interval / msecPerMonth);
    interval = interval - month * msecPerMonth;

    const week = Math.floor(interval / msecPerWeek);
    interval = interval - week * msecPerWeek;

    const days = Math.floor(interval / msecPerDay);
    interval = interval - days * msecPerDay;

    const hours = Math.floor(interval / msecPerHour);
    interval = interval - hours * msecPerHour;

    const minutes = Math.floor(interval / msecPerMinute);
    interval = interval - minutes * msecPerMinute;

    if (year !== 0) {
      return this.add_s(year, ' year');
    }
    if (month !== 0) {
      return this.add_s(month, ' month');
    }
    if (week !== 0) {
      return this.add_s(week, ' week');
    }
    if (days !== 0) {
      return this.add_s(days, ' day');
    }
    if (hours !== 0) {
      return this.add_s(hours, ' hour');
    }
    if (minutes !== 0) {
      return this.add_s(minutes, ' min');
    }
    return '0s'
  }

  add_s(data_number: number, text: string) {
    switch (data_number) {
      case 1:
        return data_number + text;
      default:
        return data_number + text + 's';
    }
  }
}
