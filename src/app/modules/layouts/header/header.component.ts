import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { TaskService } from '../../task-list/services/task.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private router: Router,
    private userService: UserService,
    private taskService: TaskService
    ) {}

  public redirectTo(path: string): void {
    this.router.navigate([path]);
  }

  public logOut(): void {
    localStorage.removeItem('currentUser');
    this.userService.clearCurrentUser();
    this.taskService.clearTaskList();
    this.router.navigate(['/']);
  }

  public get authCheck(): boolean {
    return !!localStorage.getItem('currentUser');
  }
}
