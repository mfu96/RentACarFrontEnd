import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { RentalDetailComponent } from './components/rental-detail/rental-detail.component';

const routes: Routes = [
  { path:"", pathMatch:"full", component:RentalDetailComponent},
  {path:"rentals/getdetails",component:RentalDetailComponent},
  {path: "cars/getdetails", component:CarDetailComponent },
  {path: "customers/getdetails", component:CustomerDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
