// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // For ngModel
import { AppRoutingModule } from './app-routing.module'; // Import AppRoutingModule

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TransportComponent } from './transport/transport.component';
import { FlyingComponent } from './flying/flying.component';
import { FoodComponent } from './food/food.component';
import { ShoppingLeisureCultureComponent } from './shopping-leisure-culture/shopping-leisure-culture.component';
import { LivingSpaceComponent } from './living-space/living-space.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    TransportComponent,
    FlyingComponent,
    FoodComponent,
    ShoppingLeisureCultureComponent,
    LivingSpaceComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // For ngModel
    AppRoutingModule // Add AppRoutingModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
