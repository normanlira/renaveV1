import { Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { FormGroup, FormControl } from '@angular/forms';

interface TipoSolicitud {
  value: string;
  viewValue: string;
}

interface Nacionalidad {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-registration-request',
  templateUrl: './registration-request.component.html',
  styleUrls: ['./registration-request.component.scss']
})

export class RegistrationRequestComponent implements OnInit {
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


  nacionalidad: Nacionalidad[] = [
    {value: 'V', viewValue: 'V'},
    {value: 'E', viewValue: 'E'},
  ];


  tipoSolicitud: TipoSolicitud[] = [
    {value: '0', viewValue: 'Registro de Busques Incritos en la marina mercante o en Oficina de Registro Subalterno'},
    {value: '1', viewValue: 'Registro definitivo'},
    {value: '2', viewValue: 'Desincorporación de Registro'},
    {value: '3', viewValue: 'Hipoteca naval 1°'},
    {value: '4', viewValue: 'Hipoteca naval 2°'},
    {value: '5', viewValue: 'Hipoteca naval 3°'},
    {value: '6', viewValue: 'Constitución de Prenda'},
    {value: '7', viewValue: 'Sentencia Juducial'},
    {value: '8', viewValue: 'Traslado entre Circunscripción Acuáticas'},
    {value: '9', viewValue: 'Registro Sinóptico Continuo'},
    {value: '10', viewValue: 'Contrato arrendamiento a casco desnudo'},
    {value: '11', viewValue: 'Cesión'},
    {value: '12', viewValue: 'Compraventa'},
    {value: '13', viewValue: 'Elaboracón de nota marginal'},
    {value: '14', viewValue: 'Nota de aclaratoria de medida'},
    {value: '15', viewValue: 'Donaciones'},
    {value: '16', viewValue: 'Anotación provisional por un lapso de 180 días'},
    {value: '17', viewValue: 'Solicitud de medidas preventivas de cualquier género'},
    {value: '18', viewValue: 'Inscripción de derechos reales'},
    {value: '19', viewValue: 'Registro de buques nuevos'},
    {value: '20', viewValue: 'Registro de buques en construcción'},
    {value: '21', viewValue: 'Moto de agua o Dhigui'},
    {value: '22', viewValue: 'Copia certificada'},
    {value: '23', viewValue: 'Copia simple'},
    {value: '24', viewValue: 'Inscripción fuera de horario de oficina'},
    {value: '25', viewValue: 'Liberación de hipoteca naval'},
    {value: '26', viewValue: 'Certificación de gravamen'},
    {value: '27', viewValue: 'Prohibición de enajenar y gravar'},
    {value: '28', viewValue: 'Justificativo de propiedad'},
    {value: '29', viewValue: 'Comodato'},
    {value: '30', viewValue: 'Compraventa de moto de agua'},
    {value: '31', viewValue: 'Contrato de arrendamiento financiero'},
    {value: '32', viewValue: 'Addendum al contrato de arrendamiento a casco desnudo'},
    {value: '33', viewValue: 'Restantes actuaciones'},
    {value: '34', viewValue: 'Sucesiones'},
    {value: '35', viewValue: 'Inscripción de derecho reales constituidos sobre buques'},
    {value: '36', viewValue: 'Cancelación de diferencia en planilla de liquidación'},
  ];


  constructor() {

  }

  ngOnInit(): void {
  }

}
