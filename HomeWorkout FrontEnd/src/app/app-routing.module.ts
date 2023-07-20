import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FullBodyComponent } from './full-body/full-body.component';
import { ChestComponent } from './chest/chest.component';
import { AbsComponent } from './abs/abs.component';
import { ArmComponent } from './arm/arm.component';
import { ShoulderComponent } from './shoulder/shoulder.component';
import { LegComponent } from './leg/leg.component';
import { ButtComponent } from './butt/butt.component';
import { YogaComponent } from './yoga/yoga.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OpenComponent } from './open/open.component';
import { RewardComponent } from './reward/reward.component';
import { DiscoverComponent } from './discover/discover.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [

  {
    path:'',component:OpenComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'full-body',component:FullBodyComponent
  },
  {
    path:'chest',component:ChestComponent
  },
  {
    path:'abs',component:AbsComponent
  },
  {
    path:'arm',component:ArmComponent
  },
  {
    path:'shoulder',component:ShoulderComponent
  },
  {
    path:'leg',component:LegComponent
  },
  {
    path:'butt',component:ButtComponent
  },
  {
    path:'yoga',component:YogaComponent
  },
  {
    path:'reward',component:RewardComponent
  },
  {
    path:'discover',component:DiscoverComponent
  },
  {
    path:'shop',component:ShopComponent
  },

  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  {
    path:'**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
