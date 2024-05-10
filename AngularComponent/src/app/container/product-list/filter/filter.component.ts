import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  @Input()
  all: number = 0;

  @Input()
  inStock: number = 0;

  @Input()
  outOfStock: number = 0;

  //here we are creating a cutome event
  @Output()
  SelectedFilterRadioButtonChanged: EventEmitter<string> =
    new EventEmitter<string>();

  onSelectedFilterRadioButtonChanged() {
    // console.log(this.selectedFilterRadioButton);

    this.SelectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton);
  }

  selectedFilterRadioButton: string = 'all';

  constructor() {}

  ngOnInit(): void {}
}
