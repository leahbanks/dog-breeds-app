import { Injectable } from '@nestjs/common';
import { dogBreeds } from '../data/dogBreedData';

// Injectable decorator marks the DogsService class as a provider, so it can be injected into the controller
@Injectable()
export class DogsService {
  //retrieve dog data as a private field (can't be accessed from outside the class)
  private dogs = dogBreeds;

  //expose dog data over a getDogs() method that returns the dogs
  getDogs() {
    return this.dogs;
  }
}
