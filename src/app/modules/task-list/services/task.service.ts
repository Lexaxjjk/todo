import { Injectable } from '@angular/core';
import { ITaskData } from '../interfaces/task.interface';
import { UserService } from 'src/app/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: ITaskData[];
  private currentDate: Date = new Date();

  constructor(private userService: UserService) {}

  public addTask(text: string, numberOfDays: number): void {
    const deadline = new Date();
    deadline.setDate(deadline.getDate() + numberOfDays);
    this.tasks = this.tasks || this.taskList;
    this.tasks.push({
      id: this.tasks.length,
      text,
      startDate: this.currentDate,
      deadline: deadline,
      status: 'in_work',
    });
    localStorage.setItem(this.userService.currentUser.email, JSON.stringify(this.tasks));
  }

  public deleteTask(id: number): void {
    this.tasks = this.tasks || this.taskList;
    this.tasks = this.tasks.filter((task: ITaskData) => task.id !== id);
    localStorage.setItem(this.userService.currentUser.email, JSON.stringify(this.tasks));
  }

  public get taskList(): ITaskData[] {
    if (!this.tasks) {
      this.tasks = JSON.parse(localStorage.getItem(this.userService.currentUser.email));
    }
    return this.tasks || [];
  }

  public editTask(id: number, text: string): void {
    this.tasks = this.tasks || this.taskList;
    this.tasks.find((task: ITaskData) => task.id === id).text = text;
    localStorage.setItem(this.userService.currentUser.email, JSON.stringify(this.tasks));
  }

  public changeStatus(id: number, status: string):void {
    this.tasks = this.tasks || this.taskList;
    this.tasks.find((task: ITaskData) => task.id === id).status = status;
    localStorage.setItem(this.userService.currentUser.email, JSON.stringify(this.tasks));
  }

  public clearTaskList(): void {
    this.tasks = null;
  }

}
