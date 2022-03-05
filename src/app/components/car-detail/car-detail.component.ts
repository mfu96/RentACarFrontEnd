import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/entities/car';
import { CarDetailDto } from 'src/app/models/entities/carDetailDto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  carDetails: CarDetailDto[] = [];
  carByDetail: CarDetailDto[]=[];
  cars: Car[] = [];
  dataLoaded = false;

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      // if (params['categoryId']) {
      //   this.getCarsByCategory(params['categoryId']);
      // } 
      // else 
      if (params['carId']) {
        this.getCarsByDetail(params['carId']);
      }
       else {
        this.getCarDetails();
      }
    });

    // this.getCarDetails();
  }
  getCarDetails() {
    this.carService.getCarDetails().subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }

  // getCarsByCategory(categoryId: number) {
  //   this.carService.getCarsByCategory(categoryId).subscribe((response) => {
  //     this.cars = response.data;
  //     this.dataLoaded = true;
  //   });
  // }

  getCarsByDetail(carId: number) {
    this.carService.getCarsByDetail(carId).subscribe((respone) => {
      this.carByDetail = respone.data;
      this.dataLoaded = true;
    });
  }
}
