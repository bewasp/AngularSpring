import { Component, OnInit } from '@angular/core';
import {Color} from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  public colors: Color[] = [
    {
      backgroundColor: [
        'rgba(102, 219, 151, 1)',
        'rgba(241, 196, 101, 1)',
        'rgba(240, 92, 92, 1)'
      ],
      borderColor: [
        'rgba(76, 209, 10, 1)',
        'rgba(235, 173, 40, 1)',
        'rgba(235, 40, 40, 1)'
      ]
    }
  ];

  public pieChartLabels = ['medicines taken', 'delayed medication', 'medicines not taken',];
  public pieChartData = [10, 3, 4,];
  public pieChartType = 'pie';

  constructor() { }

  ngOnInit() {
  }


}
