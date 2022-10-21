import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITaskData } from '../../interfaces/task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() public task: ITaskData;
  @Input() public index: number;
  @Output() public onDeleteTask: EventEmitter<number> =
    new EventEmitter<number>();

  public deleteTask(taskId: number): void {
    this.onDeleteTask.emit(taskId);
  }
}
