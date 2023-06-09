import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsComponent } from '../components/dogs.component';



@NgModule({
  declarations: [
    DogsComponent
  ],
  exports: [
    DogsComponent
  ], 
  imports: [
    CommonModule,
  ]
})
export class DogsModule { 

}

