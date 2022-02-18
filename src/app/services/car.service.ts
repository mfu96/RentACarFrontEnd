import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/entities/car';
import { CarDetailDto } from '../models/entities/carDetailDto';
import { ListResponseModel } from '../models/responses/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
 
  apiUrl='https://localhost:44389/api/cars';
  constructor(private httpClient:HttpClient){}
  getCars():Observable<ListResponseModel<Car>>{
    return this.httpClient
    .get<ListResponseModel<Car>>(this.apiUrl+'/getall');
  }
  getCarDetails():Observable<ListResponseModel<CarDetailDto>>{
    return this.httpClient.get<ListResponseModel<CarDetailDto>>
    (this.apiUrl+ '/getdetails');
  }
}
