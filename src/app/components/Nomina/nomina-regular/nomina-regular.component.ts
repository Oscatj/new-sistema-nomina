import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nomina-regular',
  templateUrl: './nomina-regular.component.html',
  styleUrls: ['./nomina-regular.component.css']
})
export class NominaRegularComponent implements OnInit {
  
  cargos : string [] = ['contador', 'SQA'];

  departamentos : string [] = ['Sistemas', 'Contabilidad'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
