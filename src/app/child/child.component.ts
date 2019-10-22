import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { createDeliciousSandwich, Sandwich } from '../sandwich.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { distinctUntilChanged, startWith } from 'rxjs/operators';
import { StateService } from '../state.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() sandwich: Sandwich;

  @Output()
  init: EventEmitter<void> = new EventEmitter<void>();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.init.emit();
  }

}
