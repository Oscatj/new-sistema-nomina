import { Injectable } from '@angular/core';
import { Nomina } from '../models/nomina.class';

@Injectable({
  providedIn: 'root'
})
export class NominaService {
  
 nomina = new Nomina (1, 'Desarrollador', 'Sistemas', 40000,  5, 500, 2000);

/*
  nomina1 = new Nomina (1, 'Oscarina', 'Tejada', '402-0904226-2', 'SQA', 'Tecnologia', '15/1-2021', 55000, 5, 500, 4000);
  


  nomina : Nomina [] = [
    {
      "id" : 1,
      "nombre" : "Antonio",
      "apellido" : "Perez",
      "identificacion" : "10012542564",
      "cargo" : "Desarrollador",
      "departamento" : "Sistemas",
      "fechaI" : "25-01-2021",
      "sueldoB" : 18000,
      "pHorasE" : 500,
      "cantHorasE" : 5,
      "deducciones" : 2000
    }
  ]; 

  nombre : string = '';
  
  Search() {
    if (this.nombre != ""){
    this.nomina = this.nomina.filter(res=>{
      return res.nombre.toLocaleLowerCase().match(this.nombre.toLocaleLowerCase());
    });
  }else if (this.nombre == ""){
      this.nomina;
  }
  }
  deleteEmpleado(nombreNomina: string){
    this.nomina = this.nomina.filter(o => o.nombre !== nombreNomina);
  }*/

}
