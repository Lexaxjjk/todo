import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ITaskData } from '../../interfaces/task.interface';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit{
  @Input() public task: ITaskData;
  @Input() public index: number;
  @Output() public onDeleteTask: EventEmitter<number> = new EventEmitter<number>();

  public taskValue: string;
  public showEditForm: boolean = false;

  constructor(private taskService: TaskService) {}

  public ngOnInit(): void {
    this.taskValue = this.task.text;
  }

  public deleteTask(taskId: number): void {
    this.onDeleteTask.emit(taskId);
  }

  public editTask(id: number): void {
    this.taskService.editTask(id, this.taskValue);
    this.showEditForm = !this.showEditForm;
  }
}
