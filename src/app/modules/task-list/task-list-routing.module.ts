import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TaskListComponent } from "./task-list.component";
import { TaskListGuard } from "./task-list.guard";

const routes: Routes = [
    { path: '', component: TaskListComponent, canActivate: [TaskListGuard] }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [TaskListGuard]
  })
  export class TaskListRoutingModule { }