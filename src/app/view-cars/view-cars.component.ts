import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../car';

@Component({
  selector: 'app-view-cars',
  templateUrl: './view-cars.component.html',
  styleUrls: ['./view-cars.component.css']
})
export class ViewCarsComponent implements OnInit {
  cars: Car[] = [];
  searchTerm: string = '';

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCars().subscribe((data: Car[]) => {
      this.cars = data;
    });
  }

  filteredCars(): Car[] {
    if (!this.searchTerm) {
      return this.cars;
    }
    return this.cars.filter(car =>
      car.brand.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      car.price.toString().includes(this.searchTerm)
    );
  }
}
