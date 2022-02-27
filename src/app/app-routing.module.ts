import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { RentalDetailComponent } from './components/rental-detail/rental-detail.component';

const routes: Routes = [
  { path:"", pathMatch:"full", component:RentalDetailComponent},
  {path:"rentals/getdetails",component:RentalDetailComponent},
  {path: "cars/getdetails", component:CarDetailComponent },
  {path: "customers/getdetails", component:CustomerDetailComponent},
  {path: "cars/category/:categoryId", component:CarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
