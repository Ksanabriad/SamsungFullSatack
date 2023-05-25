export class telefono {
    public tipo: string;
    public numero: string;

        constructor(tipo: string, numero: string) {
        this.tipo = tipo
        this.numero = numero
    }

    public getTipo(): string {
        return this.tipo;
    }

    public setTipo(tipo: string): void {
        this.tipo = tipo;
    }

    public getNumero(): string {
        return this.numero;
    }

    public setNumero(numero: string): void {
        this.numero = numero;
    }

    public infoTelefono():void{
        console.log('El telefono es de tipo '+this.getTipo()+' con numero '+this.getNumero());
    }
}