import { transition, trigger, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { enterAnimation, leaveAnimation } from './animations/task.animations';
import { ITaskData } from './interfaces/task.interface';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  animations: [
    trigger('todoItem', [
      transition(':enter', [
        useAnimation(enterAnimation)
      ]),
      transition(':leave', [
        useAnimation(leaveAnimation)
      ])
    ])
  ]
})
export class TaskListComponent {
  public userTasks: ITaskData[] = this.taskService.taskList;

  constructor(private taskService: TaskService) {}

  public deleteTask(taskId: number): void {
    this.taskService.deleteTask(taskId);
    this.userTasks = this.taskService.taskList;
  }

  public addTask(): void {
    this.userTasks = this.taskService.taskList;
  }
}
