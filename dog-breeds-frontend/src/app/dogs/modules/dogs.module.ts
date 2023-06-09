import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsComponent } from '../components/dogs.component';
import {HttpClientModule} from "@angular/common/http"



@NgModule({
  declarations: [
    DogsComponent
  ],
  exports: [
    DogsComponent
  ], 
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class DogsModule { 

}

