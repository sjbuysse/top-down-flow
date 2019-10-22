import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { createDeliciousSandwich, Sandwich } from './sandwich.interface';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  arrayOfSandwiches = new BehaviorSubject<Sandwich[]>([]);

  constructor() {
  }

  addSandwich() {
    this.arrayOfSandwiches.next([
      ...this.arrayOfSandwiches.value,
      {...createDeliciousSandwich()}
    ]);
  }

  copySandwiches() {
    this.arrayOfSandwiches.next([
      ...this.arrayOfSandwiches.value,
    ]);
  }
}


