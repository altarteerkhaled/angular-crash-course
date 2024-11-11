import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {MyFirstCompComponent} from "./my-first-comp/my-first-comp.component";
import {FormsModule} from "@angular/forms";
import {MessageDetailsComponent} from "./message-details/message-details.component";
import {MenuComponent} from "./menu/menu.component";
import {AboutComponent} from "./about/about.component";
import {ProductService} from "./services/api/products/product.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MyFirstService} from "../services/my-first.service";
import {ProductsComponent} from "./products/products.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {NewProductComponent} from "./new-product/new-product.component";

@NgModule({
  declarations: [
    AppComponent,
    MyFirstCompComponent,
    MessageDetailsComponent,
    MenuComponent,
    AboutComponent,
    ProductsComponent,
    ProductDetailsComponent,
    NewProductComponent
  ],
  imports:[
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[
    MyFirstService,
    HttpClient
  ],
  bootstrap:[AppComponent]
})
export class AppModule {}
