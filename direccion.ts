export class direccion {
    public calle: string;
    public numero: number;
    public piso: number;
    public letra: string;
    public codigo_postal: string;
    public poblacion: string;
    public provincia: string;

    constructor(
        calle: string,
        numero: number,
        piso: number,
        letra: string,
        codigo_postal: string,
        poblacion: string,
        provincia: string,
    ) {
        this.calle = calle
        this.numero = numero
        this.piso = piso
        this.letra = letra
        this.codigo_postal = codigo_postal
        this.poblacion = poblacion
        this.provincia = provincia
    } 

    public getCalle(): string {
        return this.calle;
    }

    public setCalle(calle: string) {
        this.calle = calle;
    }


    public getNumero(): number {
        return this.numero;
    }

    public setNumero(numero: number
    ) {
        this.numero = numero;
    }

    public getPiso(): number {
        return this.piso;
    }

    public setPiso(piso: number
    ) {
        this.piso = piso;
    }

    public getLetra(): string {
        return this.letra;
    }

    public setLetra(letra: string
    ) {
        this.letra = letra;
    }

    public getCodigopostal(): string {
        return this.codigo_postal;
    }

    public setCodigopostal(codigopostal: string
    ) {
        this.codigo_postal = codigopostal;
    }

    public getPoblacion(): string {
        return this.poblacion;
    }

    public setPoblacion(poblacion: string
    ) {
        this.poblacion = poblacion;
    }

    public getProvincia(): string {
        return this.provincia;
    }

    public setProvincia(provincia: string) {
        this.provincia = provincia;
    }


    public infoDireccion():void{
        console.log('La dirección es: Calle '+this.getCalle()+
        ', Nº '+this.getNumero()+
        ', piso '+ this.getPiso()+
        ', letra '+this.getLetra()+
        ', código postal '+this.getCodigopostal()+
        ', población '+this.getPoblacion()+
        ' y provincia '+this.getProvincia());
    }


}