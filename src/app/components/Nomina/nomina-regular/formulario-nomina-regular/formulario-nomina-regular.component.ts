import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-nomina-regular',
  templateUrl: './formulario-nomina-regular.component.html',
  styleUrls: ['./formulario-nomina-regular.component.css']
})
export class FormularioNominaRegularComponent implements OnInit {

  cargos : string [] = ['contador', 'SQA'];

  departamentos : string [] = ['Sistemas', 'Contabilidad'];

  constructor() { }

  ngOnInit(): void {
  }

}
