import { Component, OnInit } from '@angular/core';
import { NominaExtraordinaria } from 'src/app/models/NominaExtraordinaria';

@Component({
  selector: 'app-nomina-extraordinaria',
  templateUrl: './nomina-extraordinaria.component.html',
  styleUrls: ['./nomina-extraordinaria.component.css']
})
export class NominaExtraordinariaComponent implements OnInit {

  nomina : NominaExtraordinaria [] = [];

  nombre : string = '';

  ngOnInit(): void {
    this.nomina = [
      {
        "id" : 1,
        "nombre" : "Antonio",
        "apellido" : "Perez",
        "identificacion" : 10012542564,
        "cargo" : "Desarrollador",
        "departamento" : "Sistemas",
        "fechaI" : "25-01-2021",
        "sueldoB" : 18000,
        "horasE" : 34,
        "comisiones" : 15121.4,
        "totalIngresos" : 39521,
        "AFP" : 452,
        "SFS" : 486.5,
        "ISR" : 754.4,
        "ctaCobrar" : 4561.45,
        "netoPagar" : 457544
      },
      {
        "id" : 2,
        "nombre" : "Carlos",
        "apellido" : "Rodriguez",
        "identificacion" : 54545144,
        "cargo" : "Gestor",
        "departamento" : "Cobros",
        "fechaI" : "05-04-2020",
        "sueldoB" : 20000,
        "horasE" : 10,
        "comisiones" : 14000.04,
        "totalIngresos" : 34000.04,
        "AFP" : 574,
        "SFS" : 984.15,
        "ISR" : 854.04,
        "ctaCobrar" : 100.00,
        "netoPagar" : 28541.41
      },
      {
        "id" : 3,
        "nombre" : "Maria",
        "apellido" : "Fernandez",
        "identificacion" : 402164665656,
        "cargo" : "Administrador",
        "departamento" : "Gerencia",
        "fechaI" : "10-01-2020",
        "sueldoB" : 37000,
        "horasE" : 15,
        "comisiones" : 15121.0,
        "totalIngresos" : 62566,
        "AFP" : 452,
        "SFS" : 486.5,
        "ISR" : 754.4,
        "ctaCobrar" : 4561.45,
        "netoPagar" : 457544
      },
      {
        "id" : 4,
        "nombre" : "Oscarina",
        "apellido" : "Tejada",
        "identificacion" : 402164665656,
        "cargo" : "SQA",
        "departamento" : "Sistemas",
        "fechaI" : "20-01-2021",
        "sueldoB" : 17000,
        "horasE" : 14,
        "comisiones" : 5121.4,
        "totalIngresos" : 45666,
        "AFP" : 452,
        "SFS" : 486.5,
        "ISR" : 754.4,
        "ctaCobrar" : 4561.45,
        "netoPagar" : 457544
      },
      {
        "id" : 5,
        "nombre" : "Pablo",
        "apellido" : "Wilson",
        "identificacion" : 223164665656,
        "cargo" : "Vendedor",
        "departamento" : "Ventas",
        "fechaI" : "03-01-2021",
        "sueldoB" : 19000,
        "horasE" : 0,
        "comisiones" : 1221.7,
        "totalIngresos" : 45666,
        "AFP" : 452,
        "SFS" : 486.5,
        "ISR" : 754.4,
        "ctaCobrar" : 4561.45,
        "netoPagar" : 457544
      },
    ]  
  }
  
  Search() {
    if (this.nombre != ""){
    this.nomina = this.nomina.filter(res=>{
      return res.nombre.toLocaleLowerCase().match(this.nombre.toLocaleLowerCase());
    });
  }else if (this.nombre == ""){
      this.ngOnInit();
  }
  }
}
