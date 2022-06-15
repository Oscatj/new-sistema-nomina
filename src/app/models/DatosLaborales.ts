export class DatosLaborales {
    _id? : number;
    fechaIngreso : string;
    departamento : string;
    cargo : string;
    horario : string;
    nombreCta : string;
    noCta : number;
    tipoCta : string;

    constructor (fechaIngreso : string, departamento : string, cargo : string, horario : string, nombreCta : string, noCta : number, tipoCta : string){
        this.fechaIngreso = fechaIngreso;
        this.departamento = departamento;
        this.cargo = cargo;
        this.horario = horario;
        this.nombreCta = nombreCta;
        this.noCta = noCta;
        this.tipoCta = tipoCta;
    }

}