import { Component } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../car';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddCarComponent 
{
  car: Car = new Car();

   constructor(private carService: CarService) {}

   addCar() {
     this.carService.addCar(this.car).subscribe(() => {
       alert('Car added successfully!');
     });
   }

}
