export class Nomina {
    id : number;
    nombre : string;
    apellido : string;
    identificacion : number;
    cargo : string;
    departamento : string;
    fechaI : string;
    sueldoB : number;
    horasE : number;
    comisiones : number;
    totalIngresos : number;
    AFP : number;
    SFS : number;
    ISR : number;
    ctaCobrar : number;
    netoPagar : number;

    constructor (id : number, nombre : string, apellido : string, identificacion : number, cargo : string, departamento : string, fechaI : string, sueldoB : number, horasE : number, comisiones : number, totalIngresos : number, AFP : number, SFS : number, ISR : number, ctaCobrar : number,netoPagar : number){
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.identificacion = identificacion;
    this.cargo = cargo;
    this.departamento = departamento;
    this.fechaI = fechaI;
    this.sueldoB = sueldoB;
    this.horasE = horasE;
    this.comisiones = comisiones;
    this.totalIngresos = totalIngresos;
    this.AFP = AFP;
    this.SFS = SFS;
    this.ISR = ISR;
    this.ctaCobrar = ctaCobrar;
    this.netoPagar = netoPagar;
    }
}