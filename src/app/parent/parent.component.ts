import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  sandwiches$ = this.stateService.arrayOfSandwiches;

  constructor(private stateService: StateService) {
  }

  ngOnInit() {
  }

  addSandwich() {
    this.stateService.addSandwich();
  }

  updateSandwiches() {
    this.stateService.updateSandwiches();
  }
}
