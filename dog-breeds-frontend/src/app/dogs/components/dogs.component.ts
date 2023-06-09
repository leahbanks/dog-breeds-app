import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dogs',
  templateUrl: 'dogs.component.html',
  styleUrls: ['dogs.component.scss']
})

export class DogsComponent implements OnInit {

  //created a dogs stream with the type Observable
  dogs$: Observable<any> | undefined;

  constructor() {}

  //A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.
  ngOnInit(): void {
    
  }

}
