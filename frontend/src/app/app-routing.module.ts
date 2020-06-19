import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component'
import { ProductsComponent } from './components/products/products.component'
import { SignupComponent } from './components/signup/signup.component';
import { AddpetsComponent } from './components/addpets/addpets.component';
import { MypetsComponent } from './components/mypets/mypets.component';
import { MybookingsComponent } from './components/mybookings/mybookings.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';
import { AbountComponent } from './components/abount/abount.component';
import { AddaboutComponent } from './components/addabout/addabout.component';
import { ViewemployeeComponent } from './components/viewemployee/viewemployee.component';
import { AddemployeeComponent } from './components/addemployee/addemployee.component';

const routes: Routes = [
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},

  {path: 'products', component: ProductsComponent},

  {path: 'addpets', component: AddpetsComponent},
  {path: 'mypets', component: MypetsComponent},

  {path: 'bookings', component: BookingsComponent},
  {path: 'mybookings', component: MybookingsComponent},

  {path: 'adminhome', component: AdminhomeComponent},

  {path: 'about', component: AbountComponent},
  {path: 'addabout', component: AddaboutComponent},

  {path: 'viewemployee', component: ViewemployeeComponent},
  {path: 'addemployee', component: AddemployeeComponent},

  {path: '', 
      redirectTo: 'signin',
      pathMatch: 'full'
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
