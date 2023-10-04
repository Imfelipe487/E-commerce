import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EcommerceComponent } from './modules/ecommerce/ecommerce.component';
import { HomeComponent } from './modules/ecommerce/components/home/home.component';
import { BestSellerComponent } from './modules/ecommerce/components/best-seller/best-seller.component';
import { NewArrivalComponent } from './modules/ecommerce/components/new-arrival/new-arrival.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  declarations: [AppComponent, EcommerceComponent, HomeComponent, BestSellerComponent, NewArrivalComponent, HeaderComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
