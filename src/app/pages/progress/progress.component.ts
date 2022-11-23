import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent {
  progressOne: number = 35;
  progressTwo: number = 65;

  constructor() {}

  get getProgressOne() {
    return `${this.progressOne}%`;
  }
  get getProgressTwo() {
    return `${this.progressTwo}%`;
  }
}
