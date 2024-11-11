import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductRepresentation} from "../services/api/models/product-representation";
import {ProductService} from "../services/api/products/product.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  constructor(
    private service: ProductService
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
}
