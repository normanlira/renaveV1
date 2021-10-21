import { Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { FormGroup, FormControl } from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-advance-request',
  templateUrl: './advance-request.component.html',
  styleUrls: ['./advance-request.component.scss']
})
export class AdvanceRequestComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });

  selectedValue: string;
  selectedCar: string;

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
