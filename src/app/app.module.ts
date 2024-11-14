import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {MyFirstCompComponent} from "./my-first-comp/my-first-comp.component";
import {FormsModule} from "@angular/forms";
import {MessageDetailsComponent} from "./message-details/message-details.component";
import {MenuComponent} from "./menu/menu.component";
import {AboutComponent} from "./about/about.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MyFirstService} from "../services/my-first.service";
import {ProductsComponent} from "./products/products.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {NewProductComponent} from "./new-product/new-product.component";
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIcon} from "@angular/material/icon";
import {LoginPageComponent} from "./login-page/login-page.component";


import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import {InputTextModule} from "primeng/inputtext";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatInput} from "@angular/material/input";
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";
import {UserDashboardComponent} from "./user-dashboard/user-dashboard.component";
import {AdminMenuComponent} from "./admin-menu/admin-menu.component";
import {UserMenuComponent} from "./user-menu/user-menu.component";
import {DeleteProductPopUpComponent} from "./delete-product-pop-up/delete-product-pop-up.component";
import {MatDialogModule} from "@angular/material/dialog";
import {HomePageComponent} from "./home-page/home-page.component";

@NgModule({
  declarations: [
    AppComponent,
    MyFirstCompComponent,
    MessageDetailsComponent,
    MenuComponent,
    AboutComponent,
    ProductsComponent,
    ProductDetailsComponent,
    NewProductComponent,
    LoginPageComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    AdminMenuComponent,
    UserMenuComponent,
    DeleteProductPopUpComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIcon,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    MatError,
    MatLabel,
    MatFormField,
    MatCardContent,
    MatCardTitle,
    MatCard,
    MatCardHeader,
    MatCardActions,
    MatInput,
    MatCardSubtitle,
    MatDialogModule
  ],
  providers:[
    MyFirstService,
    HttpClient,
    provideAnimationsAsync()
  ],
  bootstrap:[AppComponent]
})
export class AppModule {}
