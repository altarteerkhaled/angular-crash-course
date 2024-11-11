import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductRepresentation} from "../models/product-representation";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl: string = 'https://fakestoreapi.com/';

  constructor(
    private http: HttpClient
  ) { }

  getAllProductsWithLimit(limit: number = 10){
    const productsUrl = this.baseUrl+'products?limit=' + limit;
    return this.http.get<Array<ProductRepresentation>>(productsUrl);
  }

  createProduct(product : ProductRepresentation){
    const productsUrl = this.baseUrl+'products';
    return this.http.post<ProductRepresentation>(productsUrl, product);
  }

  getAll() {
    let value = localStorage.getItem("products");
    if (value != '' && value != null && typeof value != "undefined"){
      return JSON.parse(value!);
    }
  }

  addNewProduct(product: ProductRepresentation) {
    let value = localStorage.getItem("products");
    if (value != '' && value != null && typeof value != "undefined"){
       let myList = JSON.parse(value!);
       myList.push(product);
      localStorage.setItem("products", JSON.stringify(myList));
    }
  }
}
