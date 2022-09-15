export class DatosConctacto {
    _id? : number;
    email : string;
    calleNo : string;
    municipio : string;
    provincia : string;
    referencia : string;
    noTel : number;
    tipoTel :string;
    estadoTel : string;
    usuarioRed : string;
    tipoRed : string;
    estadoRed : string;
    tipoEmail: string;
    estadoEmail: string;
    
    constructor (email : string, calleNo : string, municipio : string, provincia : string, referencia : string, noTel : number, tipoTel :string, estadoTel : string, usuarioRed: string, tipoRed : string, estadoRed : string, tipoEmail: string, estadoEmail: string){
    
        this.email = email;
        this.calleNo = calleNo;
        this.municipio = municipio;
        this.provincia = provincia;
        this.referencia = referencia;
        this.noTel = noTel;
        this.tipoTel = tipoTel;
        this.estadoTel = estadoTel;
        this.usuarioRed = usuarioRed;
        this.tipoRed = tipoRed;
        this.estadoRed = estadoRed;
        this.tipoEmail = tipoEmail;
        this.estadoEmail = estadoEmail;
    }
}