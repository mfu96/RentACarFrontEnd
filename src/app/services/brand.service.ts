import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brand } from '../models/entities/brand';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/responses/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiUrl = 'https://localhost:44389/api/brands';
  constructor(private httpClient: HttpClient) {}
  getBrands(): Observable<ListResponseModel<Brand>> {
    return this.httpClient
    .get<ListResponseModel<Brand>>(this.apiUrl+'/getall' +65);
  }
}
