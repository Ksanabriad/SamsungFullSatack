"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mail = void 0;
class mail {
    constructor(tipo, direccion) {
        this.tipo = tipo;
        this.direccion = direccion;
    }
    getTipo() {
        return this.tipo;
    }
    setTipo(tipo) {
        this.tipo = tipo;
    }
    getDireccion() {
        return this.direccion;
    }
    setDireccion(direccion) {
        this.direccion = direccion;
    }
    infoMail() {
        console.log('El mail es de tipo ' + this.getTipo() + ' con dirección ' + this.getDireccion());
    }
}
exports.mail = mail;
