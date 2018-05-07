import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: "deletion-dialog",
  templateUrl: "deletion-dialog.component.html"
})
export class DeletionDialog {
  constructor(
    public dialogRef: MatDialogRef<DeletionDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
