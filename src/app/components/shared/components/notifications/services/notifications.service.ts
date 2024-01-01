import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private _snackBar: MatSnackBar) { }

  open(message: string): void {
    this._snackBar.open(message, "Ok", {
      duration: 4000,
      horizontalPosition: "end",
      verticalPosition: "bottom",
    });
  }
}
