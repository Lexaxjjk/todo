import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTransform',
})
export class DateTransformPipe implements PipeTransform {
  transform(value: Date, today: number): string {
    const msecPerMinute = 1000 * 60; // милисекунд в минуте
    const msecPerHour = msecPerMinute * 60; // милисекунд в часе
    const msecPerDay = msecPerHour * 24; // милисекунд в дне
    const msecPerWeek = msecPerDay * 7; // милисекунд в неделе
    const msecPerMonth = msecPerDay * 30; // милисекунд в месяце
    const msecPerYear = msecPerMonth * 12; // милисекунд в году

    const startDate = new Date(value);

    let interval = new Date(today).getTime() - startDate.valueOf();

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

    if (year) {
      return `${year} год`;
    }
    if (month) {
      return `${month} мес.`;
    }
    if (week) {
      return `${week} нед.`;
    }
    if (days) {
      return `${days} д.`;
    }
    if (hours) {
      return `${hours} ч.`;
    }
    if (minutes) {
      return `${minutes} мин.`;
    }
    return 'Только что'
  }


}
