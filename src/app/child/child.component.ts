import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Sandwich } from '../sandwich.interface';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, AfterViewInit {
  @Input() sandwich: Sandwich;

  @Output()
  init: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.init.emit();
  }
}
