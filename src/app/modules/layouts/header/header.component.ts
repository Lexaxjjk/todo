import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private router: Router,
    private userService: UserService
    ) {}

  public redirectTo(path: string): void {
    this.router.navigate([path]);
  }

  public logOut(): void {
    localStorage.removeItem('currentUser');
    this.userService.clearCurrentUser();
    this.router.navigate(['/']);
  }

  public get authCheck(): boolean {
    return !!localStorage.getItem('currentUser');
  }
}
