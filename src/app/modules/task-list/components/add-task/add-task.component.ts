import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { enterAnimation, leaveAnimation } from '../../animations/task.animations';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
  animations: [
    trigger('todoItem', [
      transition(':enter', [useAnimation(enterAnimation)]),
      transition(':leave', [useAnimation(leaveAnimation)]),
    ]),
  ],
})
export class AddTaskComponent implements OnInit {
  @Output() private onAddTask: EventEmitter<void> = new EventEmitter<void>();
  public addTaskForm: FormGroup;
  public showForm: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.addTaskForm = this.formBuilder.group({
      description: ['', [Validators.maxLength(90), Validators.required]],
      deadline: ['', [Validators.required, Validators.min(0)]],
    });
  }

  public addTask(): void {
    const { description, deadline } = this.addTaskForm.getRawValue();
    this.taskService.addTask(description, deadline);
    this.addTaskForm.reset();
    this.showForm = !this.showForm;
    this.onAddTask.emit();
  }
}
