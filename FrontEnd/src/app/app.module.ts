import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { authInterceptorProviders } from './_helpers/auth.interceptor';

import { AppComponent } from './app.component';

import { MenuofGodComponent } from './Components/menuof-god/menuof-god.component';
import { ViewoneComponent } from './Components/viewone/viewone.component';
import { GodcheckoutComponent } from './Components/godcheckout/godcheckout.component';
import { GodcartComponent } from './Components/godcart/godcart.component';
// import { NavComponent } from './Components/nav/nav.component';
import { EmptyBagComponent } from './Components/empty-bag/empty-bag.component';
import { CategoryComponent } from './Components/category/category.component';
// import { ProductListComponent } from './product-list/product-list.component';
import { PaymentComponent } from './Components/payment/payment.component';
// import { TypesComponent } from './types/types.component';
// import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClosingPageComponent } from './Components/closing-page/closing-page.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { UserDBoardComponent } from './Components/user-dboard/user-dboard.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminUpdateItemComponent } from './admin-update-item/admin-update-item.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuofGodComponent,
    ViewoneComponent,
    EmptyBagComponent,
    CategoryComponent,
    // ProductListComponent,
    GodcheckoutComponent,
    GodcartComponent,
    NavbarComponent,
    PaymentComponent,
    // CheckoutComponent,
      LoginComponent,
      RegisterComponent,
      ClosingPageComponent,
      NavbarComponent,
      UserDBoardComponent,
      ProfileComponent,
      AdminDashboardComponent,
      AdminUpdateItemComponent,



  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})

export class AppModule { }
