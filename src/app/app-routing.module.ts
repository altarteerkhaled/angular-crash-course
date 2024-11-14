import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {MyFirstCompComponent} from "./my-first-comp/my-first-comp.component";
import {AboutComponent} from "./about/about.component";
import {ProductsComponent} from "./products/products.component";
import {NewProductComponent} from "./new-product/new-product.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";
import {UserDashboardComponent} from "./user-dashboard/user-dashboard.component";
import {DeleteProductPopUpComponent} from "./delete-product-pop-up/delete-product-pop-up.component";
import {HomePageComponent} from "./home-page/home-page.component";


const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'about/:username',
    component: AboutComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'new-product',
    component: NewProductComponent
  },
  {
    path:'login',
    component: LoginPageComponent
  },
  { path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'adminHomePage',
    component: AdminDashboardComponent
  },
  {
    path: 'userHomePage',
    component: UserDashboardComponent
  },
  {
    path:'deleteProduct',
    component: DeleteProductPopUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export  class AppRoutingModule{}
