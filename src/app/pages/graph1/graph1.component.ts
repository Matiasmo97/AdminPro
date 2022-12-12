import { Component } from '@angular/core';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-graph1',
  templateUrl: './graph1.component.html',
  styleUrls: ['./graph1.component.css'],
})
export class Graph1Component {
  typeOne: ChartType = 'doughnut';
  titleOne: string = 'Sales';
  labelsOne: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  dataOne: any = {
    datasets: [
      { data: [ 350, 450, 100 ] },
    ]
  };
  typeTwo: ChartType = 'doughnut';
  titleTwo: string = 'Shopping';
  labelsTwo: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  dataTwo: any = {
    datasets: [
      { data: [ 450, 350, 100 ] },
    ]
  };
  typeThree: ChartType = 'doughnut';
  titleThree: string = 'Changes';
  labelsThree: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  dataThree: any = {
    datasets: [
      { data: [ 450, 350, 100 ] },
    ]
  };
  typeFour: ChartType = 'doughnut';
  titleFour: string = 'Shopping 2';
  labelsFour: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  dataFour: any = {
    datasets: [
      { data: [ 100, 250, 500 ] },
    ]
  };

  constructor() {}
}
