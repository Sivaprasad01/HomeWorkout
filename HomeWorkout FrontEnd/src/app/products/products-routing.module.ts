import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';

import { AllProductsComponent } from './all-products/all-products.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { Header2Component } from './header2/header2.component';

const routes: Routes = [
//   {
// path:'allproducts',redirectTo:'allproducts',pathMatch:'full'
//   },
  { 
    path: '', component: AllProductsComponent 
  },
  {// 4200/products/viewProducts
    path:'viewproducts/:id',component:ViewProductsComponent
  },
  {// 4200/products/wishlist
    path:'wishlist',component:WishlistComponent
  },
  {// 4200/products/cart
    path:'cart',component:CartComponent
  },
  {
    path:'header2',component:Header2Component
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
