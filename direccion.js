"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.direccion = void 0;
class direccion {
    constructor(calle, numero, piso, letra, codigo_postal, poblacion, provincia) {
        this.calle = calle;
        this.numero = numero;
        this.piso = piso;
        this.letra = letra;
        this.codigo_postal = codigo_postal;
        this.poblacion = poblacion;
        this.provincia = provincia;
    }
    getCalle() {
        return this.calle;
    }
    setCalle(calle) {
        this.calle = calle;
    }
    getNumero() {
        return this.numero;
    }
    setNumero(numero) {
        this.numero = numero;
    }
    getPiso() {
        return this.piso;
    }
    setPiso(piso) {
        this.piso = piso;
    }
    getLetra() {
        return this.letra;
    }
    setLetra(letra) {
        this.letra = letra;
    }
    getCodigopostal() {
        return this.codigo_postal;
    }
    setCodigopostal(codigopostal) {
        this.codigo_postal = codigopostal;
    }
    getPoblacion() {
        return this.poblacion;
    }
    setPoblacion(poblacion) {
        this.poblacion = poblacion;
    }
    getProvincia() {
        return this.provincia;
    }
    setProvincia(provincia) {
        this.provincia = provincia;
    }
    infoDireccion() {
        console.log('La dirección es: Calle ' + this.getCalle() +
            ', Nº ' + this.getNumero() +
            ', piso ' + this.getPiso() +
            ', letra ' + this.getLetra() +
            ', código postal ' + this.getCodigopostal() +
            ', población ' + this.getPoblacion() +
            ' y provincia ' + this.getProvincia());
    }
}
exports.direccion = direccion;
