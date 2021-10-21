import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface Data {
  id: string;
  matricula: string;
  nombre: string;
  uab: string;
  uan: string;
  nro_exp: string;
  tipo: string;
}

interface Year {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-boats',
  templateUrl: './boats.component.html',
  styleUrls: ['./boats.component.scss']
})

export class BoatsComponent implements AfterViewInit {
  totalLength = 0;

  years: Year[] = [
    {value: '2018', viewValue: '2018'},
    {value: '2019', viewValue: '2019'},
    {value: '2020', viewValue: '2020'},
    {value: '2021', viewValue: '2021'}
  ];

  data: Data[] = [
    {id: '1', matricula: 'APNN-9250', nombre: 'Lorem', uab: '529', uan: '', nro_exp: '234', tipo: 'Pesquero'},
    {id: '2', matricula: 'APNN-9250', nombre: 'Lorem', uab: '529', uan: '355', nro_exp: '234', tipo: 'Pesquero'},
    {id: '3', matricula: 'APNN-9250', nombre: 'Lorem', uab: '529', uan: '355', nro_exp: '234', tipo: 'Carga General'},
    {id: '4', matricula: 'APNN-9250', nombre: 'Lorem', uab: '529', uan: '355', nro_exp: '234', tipo: 'Pesquero'},
    {id: '5', matricula: 'APNN-9250', nombre: 'Lorem', uab: '529', uan: '355', nro_exp: '234', tipo: 'Perforación y Exploración'},
    {id: '6', matricula: 'APNN-9250', nombre: 'Lorem', uab: '529', uan: '355', nro_exp: '234', tipo: 'Pesquero'},
    {id: '7', matricula: 'APNN-9250', nombre: 'Lorem', uab: '529', uan: '355', nro_exp: '234', tipo: 'Pesquero'},
    {id: '8', matricula: '2018', nombre: 'Lorem', uab: '529', uan: '', nro_exp: '234', tipo: 'Pesquero'},
    {id: '9', matricula: '2018', nombre: 'Lorem', uab: '529', uan: '11222333', nro_exp: '234', tipo: 'Pesquero'},
    {id: '10', matricula: '2020', nombre: 'Lorem', uab: '529', uan: '', nro_exp: '234', tipo: 'Pesquero'},
    {id: '11', matricula: '2018', nombre: 'Lorem', uab: '529', uan: '11222333', nro_exp: '234', tipo: 'Carga General'},
    {id: '12', matricula: '2017', nombre: 'Lorem', uab: '529', uan: '', nro_exp: '234', tipo: 'Pesquero'},
    {id: '13', matricula: '2018', nombre: 'Lorem', uab: '529', uan: '11222333', nro_exp: '234', tipo: 'Pesquero'},
    {id: '14', matricula: 'APNN-9250', nombre: 'Lorem', uab: '529', uan: '', nro_exp: '543', tipo: 'Pesquero'},
    {id: '15', matricula: '2018', nombre: 'Lorem', uab: '529', uan: '11222333', nro_exp: '234', tipo: 'Perforación y Exploración'},
    {id: '16', matricula: 'APNN-9250', nombre: 'Lorem', uab: '529', uan: '355', nro_exp: '765', tipo: 'Pesquero'},
    {id: '17', matricula: '2018', nombre: 'Lorem', uab: '529', uan: '11222333', nro_exp: '234', tipo: 'Carga General'},
    {id: '18', matricula: 'APNN-9250', nombre: 'Lorem', uab: '529', uan: '355', nro_exp: '876', tipo: 'Perforación y Exploración'},
    {id: '19', matricula: '2018', nombre: 'Lorem', uab: '529', uan: '11222333', nro_exp: '234', tipo: 'Pesquero'},
  ];

  displayedColumns: string[] = ['nro', 'matricula', 'nombre', 'uab', 'uan' , 'nro_exp' , 'tipo' , 'accion'];
  dataSource: MatTableDataSource<Data>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.totalLength = this.data.length;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    this.totalLength = this.dataSource.filteredData.length;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
