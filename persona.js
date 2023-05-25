"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.persona = void 0;
class persona {
    constructor(nombre, apellidos, edad, dni, cumpleanos, color_favorito, sexo, notas, direccion, mail, telefono) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.dni = dni;
        this.cumpleanos = cumpleanos;
        this.color_favorito = color_favorito;
        this.sexo = sexo;
        this.notas = notas;
        this.direccion = direccion;
        this.mail = mail;
        this.telefono = telefono;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getApellidos() {
        return this.apellidos;
    }
    setApellidos(apellidos) {
        this.apellidos = apellidos;
    }
    getEdad() {
        return this.edad;
    }
    setEdad(edad) {
        this.edad = edad;
    }
    getDni() {
        return this.dni;
    }
    setDni(dni) {
        this.dni = dni;
    }
    getCumpleanos() {
        return this.cumpleanos;
    }
    setCumpleanos(cumpleanos) {
        this.cumpleanos = cumpleanos;
    }
    getColorfavorito() {
        return this.color_favorito;
    }
    setColorfavorito(colorfavorito) {
        this.color_favorito = colorfavorito;
    }
    getSexo() {
        return this.sexo;
    }
    setSexo(sexo) {
        this.sexo = sexo;
    }
    getNotas() {
        return this.notas;
    }
    setNotas(notas) {
        this.notas = notas;
    }
    getDireccion() {
        return this.direccion;
    }
    setDireccion(direccion) {
        this.direccion = direccion;
    }
    getMail() {
        return this.mail;
    }
    setMail(mail) {
        this.mail = mail;
    }
    getTelefono() {
        return this.telefono;
    }
    setTelefono(telefono) {
        this.telefono = telefono;
    }
    infoPersona() {
        console.log('La infomación de la persona es: ');
        console.log('Nombre y apellidos: ' + this.getNombre() + ', ' + this.getApellidos());
        console.log('Edad: ' + this.getEdad());
        console.log('DNI: ' + this.getDni());
        console.log('Fecha de cumpleaños: ' + this.getCumpleanos());
        console.log('Color favorito: ' + this.getColorfavorito());
        console.log('Sexo: ' + this.getSexo());
        this.direccion.infoDireccion();
        this.mail.infoMail();
        this.telefono.infoTelefono();
        console.log('Notas: ' + this.getNotas());
    }
    validarDni(dni) {
        if (this.dni = dni) {
            return true;
        }
        else
            return false;
    }
}
exports.persona = persona;
