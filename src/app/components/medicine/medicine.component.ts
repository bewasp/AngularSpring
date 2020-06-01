import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {

  @Input() name: string;
  @Input() dailyDose: number;
  @Input() doseTimestamp: number;
  @Input() doseNumber: number;

  constructor() { }

  ngOnInit() {
  }

}
