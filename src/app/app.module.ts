import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCarComponent } from './add/add.component';
import { UpdateCarComponent } from './update/update.component';
import { ViewCarsComponent } from './view-cars/view-cars.component';
import { DeleteCarComponent } from './delete-car/delete-car.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CarService } from './car.service';

@NgModule({
  declarations: [
    AppComponent,
    AddCarComponent,
    UpdateCarComponent,
    ViewCarsComponent,
    DeleteCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
