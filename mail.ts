export class mail {
    public tipo: string;
    public direccion: string;

    constructor(tipo: string, direccion: string) {
        this.tipo = tipo
        this.direccion = direccion
    } 

    public getTipo(): string {
        return this.tipo;
    }

    public setTipo(tipo: string
    ) {
        this.tipo = tipo;
    }

    public getDireccion(): string {
        return this.direccion;
    }

    public setDireccion(direccion: string) {
        this.direccion = direccion;
    }

    public infoMail():void{
        console.log('El mail es de tipo '+this.getTipo()+' con dirección '+this.getDireccion());
    }
}