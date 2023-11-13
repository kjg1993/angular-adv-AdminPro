import { Component, Input } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';


@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent {
    
  @Input() title: string = 'Sin Titulo';
  

@Input('labels') doughnutChartLabels: string[] = [
  'Label1',
  'Label2',
  'Label3',
];

@Input('data') doughnutChartData: ChartData<'doughnut'> = {
  labels: this.doughnutChartLabels,
  datasets: [
    { data: [250, 130, 70], backgroundColor:['#6857e6','#009fee','#f02059'] },
  ],
};


public doughnutChartType: ChartType = 'doughnut';

}
