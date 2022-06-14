export class DatosConctacto {
    _id? : number;
    emailP : string;
    emailE : string;
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
    
    constructor (emailP : string, emailE : string, calleNo : string, municipio : string, provincia : string, referencia : string, noTel : number, tipoTel :string, estadoTel : string, usuarioRed: string, tipoRed : string, estadoRed : string){
    
        this.emailP = emailP;
        this.emailE = emailE;
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
    }
}