import {Component, EventEmitter, Output} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-delete-product-pop-up',
  templateUrl: './delete-product-pop-up.component.html',
  styleUrl: './delete-product-pop-up.component.scss'
})
export class DeleteProductPopUpComponent {

  constructor(private dialogRef: MatDialogRef<DeleteProductPopUpComponent>) {}

  closeDialog() {
    this.dialogRef.close('delete'); // Pass 'delete' to indicate the delete action
  }
}
