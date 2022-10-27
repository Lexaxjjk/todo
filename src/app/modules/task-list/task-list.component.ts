import { Component } from '@angular/core';
import { ITaskData } from './interfaces/task.interface';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  public userTasks: ITaskData[] = this.taskService.taskList;

  constructor(private taskService: TaskService) {}

  public deleteTask(taskId: number): void {
    this.taskService.deleteTask(taskId);
    this.userTasks = this.taskService.taskList;
    console.log('user', taskId)
  }
}
