import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { enterAnimation, leaveAnimation } from '../../animations/task.animations';
import { ITaskData } from '../../interfaces/task.interface';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  animations: [
    trigger('todoItem', [
      transition(':enter', [useAnimation(enterAnimation)]),
      transition(':leave', [useAnimation(leaveAnimation)]),
    ]),
  ],
})
export class TaskComponent implements OnInit {
  @Input() public task: ITaskData;
  @Input() public index: number;
  @Output() public onDeleteTask: EventEmitter<number> =
    new EventEmitter<number>();

  public taskValue: string;
  public taskStatus: string;
  public showEditForm: boolean = false;
  public today: number = new Date().valueOf();

  constructor(private taskService: TaskService) {}

  public ngOnInit(): void {
    this.taskValue = this.task.text;
    if (new Date(this.task.deadline).valueOf() < this.today) {
      this.taskService.changeStatus(this.task.id, 'expired');
    }
  }

  public deleteTask(taskId: number): void {
    this.onDeleteTask.emit(taskId);
  }

  public editTask(id: number): void {
    this.taskService.editTask(id, this.taskValue);
    this.showEditForm = !this.showEditForm;
  }
}
