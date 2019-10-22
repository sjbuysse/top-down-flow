import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Sandwich } from '../sandwich.interface';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input()
  sandwich: Sandwich;
  @Output()
  init: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
    this.init.emit();
  }

}
