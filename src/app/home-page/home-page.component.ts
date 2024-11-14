import {Component, OnInit} from '@angular/core';
import {ProductRepresentation} from "../services/api/models/product-representation";

interface Category {
  name: string;
}


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit{

  products: ProductRepresentation[] = [];
  categories: Category[] = [
    { name: 'Electronics' },
    { name: 'Furniture' },
    { name: 'Clothing' },
    { name: 'Books' }
  ];
  ngOnInit(): void {
    let value = localStorage.getItem("products");
    if (value != '' && value != null && typeof value != "undefined"){
      this.products =  JSON.parse(value!);
    }
  }



}
