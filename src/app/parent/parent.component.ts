import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';
import { select, Store } from '@ngrx/store';
import { Sandwich } from '../sandwich.interface';
import { map } from 'rxjs/operators';
import { addSandwich, updateSandwiches } from '../store/actions';
import { selectSandwiches } from '../store/selectors';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  arrayOfSandwiches$ = this.stateService.arrayOfSandwiches;
  objectOfSandwiches$ = this.stateService.objectOfSandwiches;
  storeOfSandwiches$ = this.store.pipe(select(selectSandwiches));

  constructor(private stateService: StateService, private store: Store<{ data: { sandwiches: Sandwich[] } }>) {
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

  addSandwichToStore() {
    this.store.dispatch(addSandwich());
  }

  updateSandwichesStore() {
    this.store.dispatch(updateSandwiches());
  }
}
