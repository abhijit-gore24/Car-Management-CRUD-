import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../car.service';
import { Car } from '../car';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateCarComponent implements OnInit {
  car: Car = new Car();
  id!: string; // Change number to string

  constructor(
    private carService: CarService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.carService.getCarById(this.id).subscribe({
      next: (data: Car) => {
        this.car = data;
      },
      error: (err) => {
        console.error('Error fetching car details', err);
      }
    });
  }

  updateCar() {
    this.carService.updateCar(this.id, this.car).subscribe({
      next: () => {
        alert('Car updated successfully!');
        this.router.navigate(['/view-cars']); // Navigate to the cars list
      },
      error: (err) => {
        console.error('Error updating car', err);
        alert('Failed to update car.');
      }
    });
  }
}
