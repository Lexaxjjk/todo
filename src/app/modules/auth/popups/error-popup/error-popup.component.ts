import { Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IErrorDialogData } from '../../interfaces/error-popup.interface';

@Component({
  selector: 'app-error-popup',
  templateUrl: './error-popup.component.html',
  styleUrls: ['./error-popup.component.scss']
})
export class ErrorPopupComponent {

  constructor(
    public dialogRef: MatDialogRef<ErrorPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IErrorDialogData,
    private router: Router,
    ) { }

    public redirectTo(path: string): void {
      this.dialogRef.close();
      this.router.navigate([path]);
    }
}
