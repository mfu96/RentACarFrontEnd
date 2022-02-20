import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/entities/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories:Category[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
