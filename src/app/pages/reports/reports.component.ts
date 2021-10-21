import { Component, OnInit } from '@angular/core';

export interface Section {
  value: string;
  name: string;
}

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  folders: Section[] = [
    {
      value: '0',
      name: 'Libro de Solicitudes',
    },
    {
      value: '1',
      name: 'Libro Diario',
    },
    {
      value: '2',
      name: 'Libro de planilla de liquidación',
    },
    {
      value: '3',
      name: 'Libro de índice de otorgantes',
    },
    {
      value: '4',
      name: 'Libro de hipotecas navales y liberaciones',
    },
    {
      value: '5',
      name: 'Libro de control de Entrada de documento',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
