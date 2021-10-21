import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface Data {
  id: string;
  anio: string;
  actuacion: string;
  cedula: string;
  solicitante: string;
  estatus: string;
  fecha: string;
  buque: string;
  matricula: string;
}

interface Year {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-bestowal',
  templateUrl: './bestowal.component.html',
  styleUrls: ['./bestowal.component.scss']
})
export class BestowalComponent implements AfterViewInit {
  totalLength = 0;

  years: Year[] = [
    {value: '2018', viewValue: '2018'},
    {value: '2019', viewValue: '2019'},
    {value: '2020', viewValue: '2020'},
    {value: '2021', viewValue: '2021'}
  ];

  data: Data[] = [
    {id: '1', anio: '2018', actuacion: 'Elaboracion', cedula: '11222333', solicitante: 'Maritima Marlin c.a.',
    estatus: 'Convalidada', fecha: '03/01/2021', buque: 'Samba', matricula: 'AMMT-123'},
    {id: '2', anio: '2017', actuacion: 'Compraventa', cedula: '11222333', solicitante: 'Maritima Marlin c.a.',
    estatus: 'Convalidada', fecha: '03/01/2021', buque: 'Samba', matricula: 'AMMT-123'},
    {id: '3', anio: '2017', actuacion: 'Hipotecas', cedula: '11222333', solicitante: 'Maritima Marlin c.a.',
    estatus: 'Convalidada', fecha: '03/01/2021', buque: 'Samba', matricula: 'AMMT-123'},
    {id: '4', anio: '2019', actuacion: 'Registro', cedula: '11222333', solicitante: 'Maritima Marlin c.a.', estatus: 'Convalidada', fecha: '03/01/2021', buque: 'Samba', matricula: 'AMMT-123'},
    {id: '5', anio: '2019', actuacion: 'Copia simple', cedula: '11222333', solicitante: 'Maritima Marlin c.a.',
    estatus: 'Convalidada', fecha: '03/01/2021', buque: 'Samba', matricula: 'AMMT-123'},
    {id: '6', anio: '2020', actuacion: 'Contrato', cedula: '11222333', solicitante: 'Maritima Marlin c.a.', estatus: 'Convalidada', fecha: '03/01/2021', buque: 'Samba', matricula: 'AMMT-123'},
    {id: '7', anio: '2020', actuacion: 'Elaboracion', cedula: '11222333', solicitante: 'Maritima Marlin c.a.',
    estatus: 'Convalidada', fecha: '03/01/2021', buque: 'Samba', matricula: 'AMMT-123'},
    {id: '8', anio: '2018', actuacion: 'Contrato', cedula: '11222333', solicitante: 'Maritima Marlin c.a.', estatus: 'Convalidada', fecha: '03/01/2021', buque: 'Samba', matricula: 'AMMT-123'},
    {id: '9', anio: '2018', actuacion: 'Copia', cedula: '11222333', solicitante: 'Maritima Marlin c.a.', estatus: 'Convalidada', fecha: '03/01/2021', buque: 'Samba', matricula: 'AMMT-123'},
    {id: '10', anio: '2020', actuacion: 'Registro', cedula: '11222333', solicitante: 'Maritima Marlin c.a.', estatus: 'Convalidada', fecha: '03/01/2021', buque: 'Samba', matricula: 'AMMT-123'},
    {id: '11', anio: '2018', actuacion: 'Elaboración de Nota Marginal', cedula: '11222333', solicitante: 'Maritima Marlin c.a.', estatus: 'Convalidada', fecha: '03/01/2021', buque: 'Samba', matricula: 'AMMT-123'},
    {id: '12', anio: '2017', actuacion: 'Elaboración de Nota Marginal', cedula: '11222333', solicitante: 'Maritima Marlin c.a.', estatus: 'Convalidada', fecha: '03/01/2021', buque: 'Samba', matricula: 'AMMT-123'},
    {id: '13', anio: '2018', actuacion: 'Elaboración de Nota Marginal', cedula: '11222333', solicitante: 'Maritima Marlin c.a.', estatus: 'Convalidada', fecha: '03/01/2021', buque: 'Samba', matricula: 'AMMT-123'},
    {id: '14', anio: '2018', actuacion: 'Elaboración de Nota Marginal', cedula: '11222333', solicitante: 'Maritima Marlin c.a.', estatus: 'Convalidada', fecha: '03/01/2021', buque: 'Samba', matricula: 'AMMT-123'},
    {id: '15', anio: '2018', actuacion: 'Elaboración de Nota Marginal', cedula: '11222333', solicitante: 'Maritima Marlin c.a.', estatus: 'Convalidada', fecha: '03/01/2021', buque: 'Samba', matricula: 'AMMT-123'},
    {id: '16', anio: '2018', actuacion: 'Elaboración de Nota Marginal', cedula: '11222333', solicitante: 'Maritima Marlin c.a.', estatus: 'Convalidada', fecha: '03/01/2021', buque: 'Samba', matricula: 'AMMT-123'},
    {id: '17', anio: '2018', actuacion: 'Elaboración de Nota Marginal', cedula: '11222333', solicitante: 'Maritima Marlin c.a.', estatus: 'Convalidada', fecha: '03/01/2021', buque: 'Samba', matricula: 'AMMT-123'},
    {id: '18', anio: '2018', actuacion: 'Elaboración de Nota Marginal', cedula: '11222333', solicitante: 'Maritima Marlin c.a.', estatus: 'Convalidada', fecha: '03/01/2021', buque: 'Samba', matricula: 'AMMT-123'},
    {id: '19', anio: '2018', actuacion: 'Elaboración de Nota Marginal', cedula: '11222333', solicitante: 'Maritima Marlin c.a.', estatus: 'Convalidada', fecha: '03/01/2021', buque: 'Samba', matricula: 'AMMT-123'},
  ];

  displayedColumns: string[] = ['nro', 'anio', 'actuacion', 'cedula' , 'solicitante' , 'estatus' , 'fecha' , 'buque' , 'matricula' , 'accion'];
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
