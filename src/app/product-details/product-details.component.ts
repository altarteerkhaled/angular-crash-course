import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductRepresentation} from "../services/api/models/product-representation";
import {ProductService} from "../services/api/products/product.service";
import {MatDialog} from "@angular/material/dialog";
import {DeleteProductPopUpComponent} from "../delete-product-pop-up/delete-product-pop-up.component";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  constructor(
    private service: ProductService,
    private dialog: MatDialog
  ) {
  }


  @Input()
  product: ProductRepresentation = {};

  @Output()
  newItemEvent = new EventEmitter<any>();



  deleteProduct() {
    this.service.deleteProductFromStorage(this.product);
    this.newItemEvent.emit();
  }

  openPopup() {
    const dialogRef = this.dialog.open(DeleteProductPopUpComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'delete') {
        this.deleteProduct(); // Call the parent method here
      }
    });
  }
}
