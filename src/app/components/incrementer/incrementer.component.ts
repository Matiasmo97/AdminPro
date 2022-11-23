import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styleUrls: ['./incrementer.component.css'],
})
export class IncrementerComponent {
  @Input() progress: number = 50;
  @Input() btnClass: string = 'btn-primary';

  @Output() changeProgress: EventEmitter<number> = new EventEmitter();

  constructor() {}

  setChange(value: number): void {
    this.changeProgress.emit(value);
  }

  changeValue(value: number): any {
    if (this.progress >= 100 && value >= 0) {
      this.setChange(100);
      return (this.progress = 100);
    }

    if (this.progress <= 0 && value < 0) {
      this.setChange(0);
      return (this.progress = 0);
    }

    this.progress = this.progress + value;
    this.setChange(this.progress);
  }

  onChange(value: number): void {
    if (value >= 100) {
      this.progress = 100;
    } else if (value <= 0) {
      this.progress = 0;
    } else {
      this.progress = value;
    }
    console.log(this.progress);
    
    this.setChange(this.progress);
  }
}
