import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DogsService } from '../services/dogs.service';

@Component({
  selector: 'app-dogs',
  templateUrl: 'dogs.component.html',
  styleUrls: ['dogs.component.scss'],
})
export class DogsComponent implements OnInit {
  //created a dogs stream with the type Observable
  dogs$: Observable<any> | undefined;

  //inject dogs service into component
  constructor(private dogsService: DogsService) {}

  //A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.
  //used to call the dogs service, retrieve the dogs and assign it to the dogs observable
  ngOnInit(): void {
    this.dogs$ = this.dogsService.getDogs();
  }
}
