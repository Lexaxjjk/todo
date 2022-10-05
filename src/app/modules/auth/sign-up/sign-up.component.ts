import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { ErrorPopupComponent } from '../popups/error-popup/error-popup.component';
import { ComponentCanDeactivate } from './sing-up.guard';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SingUpComponent implements OnInit, ComponentCanDeactivate {
  public signUpForm: FormGroup;
  public hide: { pass: boolean, confPass: boolean } = {
    pass: true,
    confPass: true
  };
  public Error: string;
  public errorMessage: string = 'Пользователь с указаным Email уже существует. Повторите регистрацию или выполните вход!'

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    public dialog: MatDialog
  ) { }

  public ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      pass: ['', [Validators.minLength(6), Validators.required]],
      confPass: ['', [Validators.minLength(6), Validators.required, this.passEqual()]]
    });
  }

  public get confPassIsRequired(): boolean {
    return (this.signUpForm.get('confPass').hasError('minlength') || this.signUpForm.get('confPass').hasError('required')) && !this.signUpForm.get('confPass').hasError('custom')
  }

  openDialog(enterAnimationDuration?: string, exitAnimationDuration?: string): void {
    const dialogRef = this.dialog.open(ErrorPopupComponent, {
      data: {
        title: 'Ошибка регистрации',
        content: 'Пользователь с указаным Email уже существует. Повторите регистрацию или выполните вход!',
        buttonNav: 'Вход',
        path: '/auth/sign-in'
      },
      width: '450px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.clear();
    });
  }

  public submit(): void {
    if (this.signUpForm.invalid) return;

    const { confPass, ...user } = this.signUpForm.getRawValue();
    if (!this.userService.signUp(user)) {
      this.openDialog();
      return
    }
    this.router.navigate(['/auth/sign-in']);
  }

  public clear(): void {
    this.signUpForm.reset();
  }

  private passEqual(): ValidationErrors | null {
    return (control: FormControl) => {
      return this.signUpForm?.get('pass')?.value === control?.value ? null : { custom: true };
    }
  }

  canDeactivate(): boolean | Observable<boolean> {

    if (!this.signUpForm.getRawValue().firstName) {
      return true;
    }
    return confirm("Вы хотите покинуть страницу? В этом случае все данные будут утеряны!");
  }
}
