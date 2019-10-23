import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';
import { select, Store } from '@ngrx/store';
import { Sandwich } from '../sandwich.interface';
import { addSandwichToArray, addSandwichToObject, updateSandwichesArray, updateSandwichesObject } from '../store/actions';
import { selectSandwichesArray, selectSandwichesObject } from '../store/selectors';
import { DataState } from '../store/state';
import { distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  arrayOfSandwiches$ = this.stateService.arrayOfSandwiches.pipe(distinctUntilChanged(areArraysEqual));
  objectOfSandwiches$ = this.stateService.objectOfSandwiches.pipe(distinctUntilChanged(areObjectsEqual));
  storeOfSandwichesArray$ = this.store.pipe(
    select(selectSandwichesArray),
    distinctUntilChanged(areArraysEqual),
  );
  storeOfSandwichesObject$ = this.store.pipe(
    select(selectSandwichesObject),
    distinctUntilChanged(areObjectsEqual),
  );

  constructor(private stateService: StateService, private store: Store<{ data: DataState }>) {
  }

  ngOnInit() {
  }

  addSandwichToArray() {
    this.stateService.addSandwichToArray();
  }

  updateSandwichesArray() {
    this.stateService.updateSandwichesArray();
  }

  addSandwichToObject() {
    this.stateService.addSandwichToObject();
  }

  updateSandwichesObject() {
    this.stateService.updateSandwichesObject();
  }

  addSandwichToArrayInStore() {
    this.store.dispatch(addSandwichToArray());
  }

  updateSandwichesArrayInStore() {
    this.store.dispatch(updateSandwichesArray());
  }

  addSandwichToObjectInStore() {
    this.store.dispatch(addSandwichToObject());
  }

  updateSandwichesObjectInStore() {
    this.store.dispatch(updateSandwichesObject());
  }
}

const areArraysEqual = (oldArray: Sandwich[], newArray: Sandwich[]) =>
  oldArray.toString() === newArray.toString();

const areObjectsEqual = (oldObject: { [key: string]: Sandwich }, newObject: { [key: string]: Sandwich }) =>
  JSON.stringify(oldObject) === JSON.stringify(newObject);
