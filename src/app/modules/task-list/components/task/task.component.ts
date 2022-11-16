import { transition, trigger, useAnimation } from '@angular/animations';
import { DialogRef } from '@angular/cdk/dialog';
import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { interval, Subject, take, takeUntil, timer } from 'rxjs';
import { enterAnimation, leaveAnimation } from '../../animations/task.animations';
import { ITaskData } from '../../interfaces/task.interface';
import { TaskService } from '../../services/task.service';
import { ConfirmPopupComponent } from '../popups/confirm-popup/confirm-popup.component';

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
export class TaskComponent implements OnInit, OnDestroy {
  @Input() public task: ITaskData;
  @Input() public index: number;
  @Output() public onDeleteTask: EventEmitter<number> =
    new EventEmitter<number>();
  public taskValue: string;
  public taskStatus: string;
  public showEditForm: boolean = false;
  public today: number = new Date().valueOf();
  private destroy$: Subject<void> = new Subject<void>();

  constructor(private taskService: TaskService, public dialog: MatDialog) {}

  public ngOnInit(): void {
    this.taskValue = this.task.text;
    if (new Date(this.task.deadline).valueOf() < this.today) {
      this.taskService.changeStatus(this.task.id, 'expired');
    }

    interval(60000)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.today = new Date().valueOf();
      });
  }

  public deleteTask(taskId: number): void {
    this.onDeleteTask.emit(taskId);
  }

  public editTask(id: number): void {
    this.taskService.editTask(id, this.taskValue);
    this.showEditForm = !this.showEditForm;
  }

  public changeStatus(id: number) {
    if (this.task.status === 'expired') return;

    this.taskService.changeStatus(id, 'completed');
    this.task.status = 'completed';
  }

  openDialog() {
    const dialogRef = this.dialog.open(ConfirmPopupComponent);

    dialogRef
    .afterClosed()
    .pipe(take(1))
    .subscribe((result) => {
      if (result) {
        this.changeStatus(this.task.id);
      }
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
