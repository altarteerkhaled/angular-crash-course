import {Component, OnInit} from '@angular/core';
import {ProductService} from "../services/api/products/product.service";
import {ProductRepresentation} from "../services/api/models/product-representation";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{

  products: Array<ProductRepresentation> = [];

  constructor(
    private service: ProductService
  ) {
  }




  ngOnInit(): void {

    // Run this at first
    this.service.getAllProductsWithLimit().subscribe({
      next: (result: Array<ProductRepresentation>)=> {
        this.products = result;
        localStorage.setItem("products", JSON.stringify(this.products));
      }
    });

    // Then comment the above and keep running the below
    this.products = this.service.getAll();
  }

  refreshProductList() {
    this.products = this.service.getAll();
  }
}
