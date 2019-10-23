import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';
import { select, Store } from '@ngrx/store';
import { Sandwich } from '../sandwich.interface';
import { addSandwichToArray, addSandwichToObject, updateSandwichesArray, updateSandwichesObject } from '../store/actions';
import { selectSandwichesArray, selectSandwichesObject } from '../store/selectors';
import { DataState } from '../store/state';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  arrayOfSandwiches$ = this.stateService.arrayOfSandwiches;
  objectOfSandwiches$ = this.stateService.objectOfSandwiches;
  storeOfSandwichesArray$ = this.store.pipe(select(selectSandwichesArray));
  storeOfSandwichesObject$ = this.store.pipe(select(selectSandwichesObject));

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
