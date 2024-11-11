import {Component} from '@angular/core';
import {ProductService} from "../services/api/products/product.service";
import {ProductRepresentation} from "../services/api/models/product-representation";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.scss'
})
export class NewProductComponent {

  constructor(
    private service: ProductService,
    private router: Router
  ) {
  }
  product: ProductRepresentation = {};

  saveNewProduct(){
    this.service.createProduct(this.product).subscribe({
      next: (result) => {
        this.service.addNewProduct(this.product);
        this.router.navigate(['products']);
      }
    });
  }
}
