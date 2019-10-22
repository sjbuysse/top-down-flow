import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  arrayOfSandwiches$ = this.stateService.arrayOfSandwiches;
  objectOfSandwiches$ = this.stateService.objectOfSandwiches;

  constructor(private stateService: StateService) {
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
}
