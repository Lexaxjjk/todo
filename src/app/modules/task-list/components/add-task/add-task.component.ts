import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  public addTaskForm: FormGroup;
  public showForm: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.addTaskForm = this.formBuilder.group({
      description: ['', [Validators.maxLength(90),Validators.required]],
      deadline: ['', Validators.required]
    });
  }
  public addTask(): void {
    // this.taskService.addTask
    const {description, deadline} = this.addTaskForm.getRawValue();
    this.taskService.addTask(description, deadline);
  }


}
