import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/entities/color';
import { ListResponseModel } from '../models/responses/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl= 'https://localhost:44389/api/colors/getall';

  constructor(private httpClient:HttpClient) { }
  getColors():Observable<ListResponseModel<Color>>{
    return this.httpClient
    .get<ListResponseModel<Color>>(this.apiUrl+ 94)
  }

}
