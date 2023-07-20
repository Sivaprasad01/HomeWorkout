import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FullBodyComponent } from './full-body/full-body.component';
import { AbsComponent } from './abs/abs.component';
import { ChestComponent } from './chest/chest.component';
import { ArmComponent } from './arm/arm.component';
import { LegComponent } from './leg/leg.component';
import { ShoulderComponent } from './shoulder/shoulder.component';
import { ButtComponent } from './butt/butt.component';
import { YogaComponent } from './yoga/yoga.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RewardComponent } from './reward/reward.component';
import { DiscoverComponent } from './discover/discover.component';
import { HttpClientModule } from '@angular/common/http';



import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { OpenComponent } from './open/open.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShopComponent } from './shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    FullBodyComponent,
    AbsComponent,
    ChestComponent,
    ArmComponent,
    LegComponent,
    ShoulderComponent,
    ButtComponent,
    YogaComponent,
    PageNotFoundComponent,
    OpenComponent,
    RewardComponent,
    DiscoverComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    MatStepperModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
