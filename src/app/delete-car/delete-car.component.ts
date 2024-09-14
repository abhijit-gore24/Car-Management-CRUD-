import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../car.service';

@Component({
  selector: 'app-delete-car',
  templateUrl: './delete-car.component.html',
  styleUrls: ['./delete-car.component.css']
})
export class DeleteCarComponent implements OnInit {
  id!: string; // Change number to string

  constructor(
    private carService: CarService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
  }

  deleteCar(): void {
    this.carService.deleteCar(this.id).subscribe({
      next: () => {
        alert('Car deleted successfully!');
        this.router.navigate(['/view-cars']); // Navigate to the cars list
      },
      error: (err) => {
        console.error('Error deleting car', err);
        alert('Failed to delete car.');
      }
    });
  }
}
