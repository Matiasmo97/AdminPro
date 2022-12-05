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
  dataOne: any = { data: [ 350, 450, 100 ] }

  constructor() {}
}
