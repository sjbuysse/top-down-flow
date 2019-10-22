import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { createDeliciousSandwich, Sandwich } from './sandwich.interface';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  arrayOfSandwiches = new BehaviorSubject<Sandwich[]>([]);
  objectOfSandwiches = new BehaviorSubject<{ [key: string]: Sandwich }>({});

  constructor() {
  }

  addSandwichToArray() {
    this.arrayOfSandwiches.next([
      ...this.arrayOfSandwiches.value,
      {...createDeliciousSandwich()}
    ]);
  }

  updateSandwichesArray() {
    this.arrayOfSandwiches.next([
      ...this.arrayOfSandwiches.value,
    ]);
  }

  addSandwichToObject() {
    const newSandwich = createDeliciousSandwich();
    this.objectOfSandwiches.next({
      ...this.objectOfSandwiches.value,
      [newSandwich.id]: newSandwich
    });
  }

  updateSandwichesObject() {
    this.objectOfSandwiches.next({
      ...this.objectOfSandwiches.value
    });
  }
}


