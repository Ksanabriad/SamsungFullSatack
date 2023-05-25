"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.telefono = void 0;
class telefono {
    constructor(tipo, numero) {
        this.tipo = tipo;
        this.numero = numero;
    }
    getTipo() {
        return this.tipo;
    }
    setTipo(tipo) {
        this.tipo = tipo;
    }
    getNumero() {
        return this.numero;
    }
    setNumero(numero) {
        this.numero = numero;
    }
    infoTelefono() {
        console.log('El telefono es de tipo ' + this.getTipo() + ' con numero ' + this.getNumero());
    }
}
exports.telefono = telefono;
