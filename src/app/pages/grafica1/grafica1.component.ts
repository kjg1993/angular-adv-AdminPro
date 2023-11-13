import { Component, Input } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: []
})
export class Grafica1Component {
  //Firs Component data
  public labels1: string[] = [
    'Download Sales',
  'In-Store Sales',
  'Mail-Order Sales',
  ];  
  public data1: ChartData<'doughnut'> = {
    labels: this.labels1,
    datasets: [
      { data: [10, 15, 40], backgroundColor:['#6857e6','#009fee','#f02059'] },
    ],
  };

  // Second Component Data
  public labels2: string[] = [
    'Specialized',
  'Mental health',
  ' Addiction services',
  ]; 

  public data2: ChartData<'doughnut'> = {
    labels: this.labels2,
    datasets: [
      { data: [15, 25, 50], backgroundColor:['#51BBFE','#8FF7A7','#F7FE72'] },
    ],
  };

  // Third Component Data
  public labels3: string[] = [
    'Product in Stock',
  'Missing Products',
  'Products in Poor Condition',
  ];  
  
  public data3: ChartData<'doughnut'> = {
    labels: this.labels3,
    datasets: [
      { data: [30, 30, 40], backgroundColor:['#98C1D9','#F09D51','#D0CFEC'] },
    ],
  };

  // Fourth Component Data

  public labels4: string[] = [
    'Clothes',
  'Toiletries',
  'Medical instruments',
  ];  

  public data4: ChartData<'doughnut'> = {
    labels: this.labels4,
    datasets: [
      { data: [42, 60, 15], backgroundColor:['#70A288','#04395E','#031D44'] },
    ],
  };

  // public data1: ChartData<'doughnut'> = {
  //   labels: this.labels1,
  //   datasets: [
  //     { data: [10, 15, 40], backgroundColor:['#6857e6','#009fee','#f02059'] },
  //   ],
  // };
 
}



