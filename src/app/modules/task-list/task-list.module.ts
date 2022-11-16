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
import { StatusColorDirective } from './directives/status-color.directive';
import { DateTransformPipe } from './pipes/date-transform.pipe';
import { MatTooltipModule } from '@angular/material/tooltip';
import { StatusTextTransformPipe } from './pipes/status-text-transform.pipe';
import { ConfirmPopupComponent } from './components/popups/confirm-popup/confirm-popup.component';
import { MatDialogModule } from '@angular/material/dialog';




@NgModule({
  declarations: [
    TaskListComponent,
    AddTaskComponent,
    TaskComponent,
    StatusColorDirective,
    DateTransformPipe,
    StatusTextTransformPipe,
    ConfirmPopupComponent
  ],
  imports: [
    CommonModule,
    TaskListRoutingModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule
  ]
})
export class TaskListModule { }
