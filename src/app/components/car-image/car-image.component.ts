import { Component, OnInit } from '@angular/core';
import { CarImage } from 'src/app/models/entities/carImage';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css']
})
export class CarImageComponent implements OnInit {

  images:CarImage[]=[];
  dataLoaded=false;


  constructor(private carImageService:CarImageService) { }

  ngOnInit(): void {
  }

  getImageById(id:number){
    this.carImageService.getImageById(id).subscribe(response=>{
      this.images=response.data;
      this.dataLoaded=true;
    });
  }

  
}
