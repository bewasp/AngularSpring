import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {DosageModel} from '../../models/dosage.model';
import {DataService} from '../../services/dose/dataservice.service';



@Component({
  selector: 'app-dosage',
  templateUrl: './dosage.component.html',
  styleUrls: ['./dosage.component.css']
})
export class DosageComponent implements OnInit {

  dose: DosageModel = new DosageModel();
  doseForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private doseService: DataService) { }

  ngOnInit() {
    this.doseForm = this.formBuilder.group({
      'name': [this.dose.name, [
        Validators.required,
      ]],
      'dailyDose': [this.dose.dailyDose, [
        Validators.required,
      ]],
      'doseTimestamp': [this.dose.doseTimestamp, [
        Validators.required,
      ]],
      'numberDose': [this.dose.doseNumber, [
        Validators.required
      ]]
    });
  }

  onDoseSubmit() {
    this.doseService.createClientDose(this.dose).subscribe();
  }

}
