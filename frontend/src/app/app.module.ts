import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularWebStorageModule } from 'angular-web-storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { ProductsComponent } from './components/products/products.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddpetsComponent } from './components/addpets/addpets.component';
import { MypetsComponent } from './components/mypets/mypets.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { MybookingsComponent } from './components/mybookings/mybookings.component';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';
import { AbountComponent } from './components/abount/abount.component';
import { AddemployeeComponent } from './components/addemployee/addemployee.component';
import { ViewemployeeComponent } from './components/viewemployee/viewemployee.component';
import { AddaboutComponent } from './components/addabout/addabout.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    ProductsComponent,
    SignupComponent,
    AddpetsComponent,
    MypetsComponent,
    BookingsComponent,
    MybookingsComponent,
    AdminhomeComponent,
    AbountComponent,
    AddemployeeComponent,
    ViewemployeeComponent,
    AddaboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularWebStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
