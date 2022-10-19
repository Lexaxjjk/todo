import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { ErrorPopupComponent } from '../popups/error-popup/error-popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  public signInForm: FormGroup;
  public hide: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  public ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.minLength(6), Validators.required]]
    });
  }

  public submit(): void {
    if (this.signInForm.invalid) return;
    const signInResult = this.userService.signIn(this.signInForm.getRawValue());
    if (!signInResult) {
      this.openDialog()
      return
    }
    this.router.navigate(['/task-list']);
  }

  public toSingUp(): void {
    this.router.navigate(['/auth/sign-up']);
  }

  private openDialog(): void {
    const dialogRef = this.dialog.open(ErrorPopupComponent, {
      data: {
        title: 'Ошибка входа',
        content: 'Пользователь с указаным Email и паролем не существует. Повторите вход или выполните регистрацию!',
        buttonNav: 'Регистрация',
        path: '/auth/sign-up'
      },
      width: '450px',
    });
    dialogRef.afterClosed().subscribe(() => {
      this.signInForm.reset();
    });
  }
}
