import { Component, OnInit } from '@angular/core';
import { CarDetailDto } from 'src/app/models/entities/carDetailDto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  carDetails:CarDetailDto[]=[]
  dataLoaded=false;

  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getCarDetails();
  }
  getCarDetails(){this.carService.getCarDetails()
    .subscribe(response=>{this.carDetails=response.data;
    this.dataLoaded=true;})}
 
}
