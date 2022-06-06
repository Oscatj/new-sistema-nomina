import { Component } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent{
  deshabilitar = false;
  mensaje = 'No se ha agregado ninguna persona';
  agregarPersona = ()=>{
    this.mensaje = 'Persona agregada con exito';
  }
  nombre: string = 'Juan';
  apellido: string = 'Tejada';
  telefono: string = '809-254-2545';
  edad: number = 40;
  direccion: string = 'C/ A, #4, Los Prados'

  //constructor(nombre, apellido, telefono, edad, direccion) { 
    //this.nombre = nombre;
    //this.apellido = apellido;
    //this.telefono = telefono;
    //this.edad = edad;
    //this.direccion = direccion;
 // }
}
