import { Injectable } from '@angular/core';
import { ToastrService, ActiveToast } from 'ngx-toastr';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { ComponentType } from '@angular/cdk/overlay';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable()

export class CrafterService {

  constructor(
    private ts: TranslateService,
    private toastr: ToastrService,
    private snackBar: MatSnackBar,
    private matDialog: MatDialog
  ) { }

  public toaster<T>(title: string, message: string, action: string): ActiveToast<T> {
    title = this.translate(title);
    message = this.translate(message);
    return this.toastr[action](message, title, {
      timeOut: 5000,
      positionClass: 'toast-bottom-right'
    });
  }

  public snack<T>(component: ComponentType<T>, duration?: number): MatSnackBarRef<T> {
    return this.snackBar.openFromComponent(component, {
      duration
    });
  }

  public dialog<T>(component: ComponentType<T>, data?: any) {
    return this.matDialog.open(component, {data});
  }

  private translate(text: string): string {
    return this.ts.instant(text);
  }

}
