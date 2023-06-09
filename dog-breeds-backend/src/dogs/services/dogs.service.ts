import { Injectable } from '@nestjs/common';
import { dogBreeds } from '../data/dogBreedData';

@Injectable()
export class DogsService {
//retrieve dog data as a private field
  private dogs = dogBreeds;

  //expose dog data over a getDogs() method that simply returns the players
  getDogs() {
    return this.dogs;
  }
}
