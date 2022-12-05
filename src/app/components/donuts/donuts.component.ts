import { Component, Input } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent {
  @Input() title!: string;
  @Input() labels!: string[];
  @Input() data!: any;

  constructor() { }

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.labels,
    datasets: [
      this.data
    ],
  };

  public doughnutChartType: ChartType = 'doughnut';


}
