export class DatosPersonales {
    _id?: number;
    nombre: string;
    apellido: string;
    apodo: string;
    noIdentidad: number;
    sexo: string;
    estadoCivil: string;
    fechaN: Date;

    constructor (nombre: string, apellido: string, apodo: string, noIdentidad: number, sexo: string, estadoCivil: string, fechaN: Date){
        this.nombre = nombre;
        this.apellido = apellido;
        this.apodo = apodo;
        this.noIdentidad = noIdentidad;
        this.sexo = sexo;
        this.estadoCivil = estadoCivil;
        this.fechaN = fechaN;
    }

}