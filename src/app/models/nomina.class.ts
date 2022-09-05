import { Persona } from "../interfaces/persona.interface";

export class Nomina implements Persona{
    id : number;
    cargo : string;
    departamento : string;
    sueldoB : number;
    pHorasE: number;
    cantHorasE : number;
    cantidadHoras : number = 8;
    deducciones: number;
    horasDiarias : number = 0;
    _AFP : number = 0.0287;
    _SFS: number = 0.0304;
    _TotalDeducciones: number = 0;
    _calHorasE: number = 0;
    _HorasE: number = 0;

    get PorcientoAFP (){
        return this.sueldoB * this._AFP;
    }
    /*
    set PorcientoAFP (AFP: number) {
        this._AFP = AFP;
        this.sueldoB * this._AFP;
    }*/
    get PorcientoSFS(){
        return this.sueldoB * this._SFS;
    }
    /*
    set PorcientoSFS (SFS: number) {
        this._SFS = SFS;
        this.sueldoB * this._SFS;
    } */
    precioHoras() {
        this.horasDiarias = this.sueldoB / 23.83;
        return this.horasDiarias / this.cantidadHoras;
    }
    precioHorasExtras() {
        return this.precioHoras() * 1.35;
    }
    CalculoHorasExtras() {
        return this.precioHorasExtras () * this.cantHorasE;
    }
    /*
    set calHorasE(horasE: number) {
        this._HorasE = horasE;
        horasE = this.cantHorasE * this.pHorasE;
    }*/
    get TotalIngresos() {
        return (this.sueldoB - (this.PorcientoAFP + this.PorcientoSFS)) + this.CalculoHorasExtras();
    }
    
    CalculoISR (sueldoAnual: number = this.TotalIngresos * 12){

        if (sueldoAnual <= 416220) {
            this.TotalIngresos;
        }
        else if(sueldoAnual > 416220 && sueldoAnual <= 624329.01){
            sueldoAnual -= 0.15 * (sueldoAnual - 416220)
        }
        else if(sueldoAnual > 624329.01 && sueldoAnual < 867123.00){
            sueldoAnual -= 31216 + 0.20 * (sueldoAnual - 624329.01)
        }
        else if(sueldoAnual > 867123.00){
            sueldoAnual -= 79776.00  + 0.25 * (sueldoAnual - 867123.00)
        }   
        return this.TotalIngresos - (sueldoAnual / 12);
    }
    get TotalDeducciones(){
        return this.PorcientoAFP + this.PorcientoSFS + this.CalculoISR() + this.CalculoHorasExtras();
    }
    /*
    set TotalDeducciones (_deducciones: number){
        this._TotalDeducciones = _deducciones;
        _deducciones = this._AFP + this._SFS + this.CalISR() + this.deducciones;
    }*/
    get NetoPagar(){
        return this.TotalIngresos - this.TotalDeducciones;
    }

    constructor (id : number, cargo : string, departamento : string, sueldoB : number, cantHorasE : number, pHorasE: number, deducciones: number){
        this.id = id;
        this.cargo = cargo;
        this.departamento = departamento;
        this.sueldoB = sueldoB;
        this.cantHorasE = cantHorasE;
        this.pHorasE = pHorasE;
        this.deducciones = deducciones;
    }
    nombre!: string;
    apellido!: string;
    identificacion!: string;
    apodo?: string | undefined;
    sexo?: string | undefined;
    estadoCivil?: string | undefined;
    correo?: string | undefined;
    fechaN?: string | undefined;
    fechaI!: string;
    relacionComercial?: string | undefined;
}


let nomina = new Nomina (1, 'Desarrollador', 'Sistemas', 40000,  5, 500, 2000);

console.log(nomina.TotalIngresos);
console.log(nomina.CalculoISR());
console.log(nomina.TotalDeducciones);
console.log(nomina.PorcientoSFS);
console.log(nomina.PorcientoAFP);
console.log(nomina.NetoPagar);
console.log(nomina.CalculoHorasExtras());