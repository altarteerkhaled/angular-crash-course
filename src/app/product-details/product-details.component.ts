import {Component, Input} from '@angular/core';
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


}