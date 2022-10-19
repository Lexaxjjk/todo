import { Injectable } from '@angular/core';
import { ITask, ITaskData } from '../interfaces/task.interface';
import { IUser } from '../../../interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private currentUser: IUser = this.userService.currentUser;
  private tasks: ITaskData[];
  private currentDate: Date = new Date;

  constructor(
    private userService: UserService
  ) { }

  public addTask(text: string, numberOfDays: number): void {
    const deadline = new Date;
    deadline.setDate(deadline.getDate() + numberOfDays);
    this.tasks = this.tasks || this.taskList;
    this.tasks.push({ id: this.tasks.length, text, startDate: this.currentDate, deadline: deadline, status: "Ожидает" });
    localStorage.setItem(this.currentUser.email, JSON.stringify(this.tasks));
  }

  public deleteTask(id: number): void {
    this.tasks = this.tasks || this.taskList;
    // this.tasks = this.tasks.filter(task: ITaskData) => task.id !== id)
    this.tasks.splice(this.tasks.findIndex(task => task.id === id), 1);
    localStorage.setItem(this.currentUser.email, JSON.stringify(this.tasks));
  }

  public get taskList(): ITaskData[] {
    if (!this.tasks) {
      this.tasks = JSON.parse(localStorage.getItem(this.currentUser.email));
      console.log(this.tasks);
    }
    return this.tasks || [];
  }
}
