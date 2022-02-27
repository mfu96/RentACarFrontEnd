import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/entities/car';
import { CarDetailDto } from '../models/entities/carDetailDto';
import { Color } from '../models/entities/color';
import { ListResponseModel } from '../models/responses/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
 
  apiUrl='https://localhost:44389/api/';
  constructor(private httpClient:HttpClient){}
  getCars():Observable<ListResponseModel<Car>>{
    let newPath= this.apiUrl +"cars/getall"
    return this.httpClient
    .get<ListResponseModel<Car>>(newPath);
  }
  getCarDetails():Observable<ListResponseModel<CarDetailDto>>{
    let newPath= this.apiUrl +"cars/getdetails";
    return this.httpClient.get<ListResponseModel<CarDetailDto>>
    (newPath);
  }
  getCarsByCategory(categoryId:number)
  :Observable<ListResponseModel<Car>>{
    let newPath= this.apiUrl + "cars/getbycategory?categoryId=" + categoryId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  } 
  getCarsByColor(colorId:number)
  :Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl +"cars/getbycolor?colodId=" + colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrand(brandId:number)
  :Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl +"cars/getbybrand?brandId=" + brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
}
