import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styleUrls: ['./incrementer.component.css'],
})
export class IncrementerComponent implements OnInit {
  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }

  @Input('value') progress: number = 50;
  @Input() btnClass: string = 'btn-primary';

  @Output() outPutValue: EventEmitter<number> = new EventEmitter();

  // get getPercentage() {
  //   return `${this.progress}%`;
  // }

  changeValue(value: number) {
    if (this.progress >= 100 && value >= 0) {
      this.outPutValue.emit(100);
      return (this.progress = 100);
    }

    if (this.progress <= 0 && value < 0) {
      this.outPutValue.emit(0);
      return (this.progress = 0);
    }

    this.progress = this.progress + value;
    return this.outPutValue.emit(this.progress);
  }

  onChange(newValue: number) {
    if (newValue >= 100) {
      this.progress = 100;
    } else if (newValue <= 0) {
      this.progress = 0;
    } else {
      this.progress = newValue;
    }

    this.outPutValue.emit(this.progress);
  }
}
