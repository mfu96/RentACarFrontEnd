import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl= "https://localhost:44389/api/cate"


  constructor() { }
}
