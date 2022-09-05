import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NominaService } from 'src/app/services/nomina.service';

@Component({
  selector: 'app-nomina',
  templateUrl: './nomina.component.html',
  styleUrls: ['./nomina.component.css']
})
export class NominaComponent implements OnInit {


  constructor(private serviceNomina: NominaService){
  }
  
  get nomina(){
      return this.serviceNomina.nomina;
  }
  /*
  delete(nomina: Nomina){
    this.serviceNomina.deleteEmpleado(nomina.nombre);
  }*/
 
  toppings = new FormControl('');

  toppingList: string[] = ['Semanal', 'Mensual', 'Quincenal', 'Todas las nóminas'];

  ngOnInit(): void {
  }
}
