import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component';
import { TaskListRoutingModule } from './task-list-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { TaskComponent } from './components/task/task.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    TaskListComponent,
    AddTaskComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    TaskListRoutingModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule
  ]
})
export class TaskListModule { }
