import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCarComponent } from './add/add.component';
import { UpdateCarComponent } from './update/update.component';
import { ViewCarsComponent } from './view-cars/view-cars.component';
import { DeleteCarComponent } from './delete-car/delete-car.component';

const routes: Routes = [
  { path: '', redirectTo: 'view-cars', pathMatch: 'full' },
  { path: 'add-car', component: AddCarComponent },
  { path: 'update-car/:id', component: UpdateCarComponent },
  { path: 'view-cars', component: ViewCarsComponent },
  { path: 'delete-car/:id', component: DeleteCarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
