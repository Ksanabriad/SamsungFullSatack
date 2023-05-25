import { mail } from './mail';
import { telefono } from './telefono';
import { direccion } from './direccion';

export class persona {
    private nombre: string;
    private apellidos: string;
    private edad: number;
    private dni: string;
    private cumpleanos: Date;
    private color_favorito: string;
    private sexo: string;
    private notas: string;
    private direccion: direccion;
    private mail: mail;
    private telefono: telefono;

    constructor(
        nombre: string,
        apellidos: string,
        edad: number,
        dni: string,
        cumpleanos: Date,
        color_favorito: string,
        sexo: string,
        notas: string,
        direccion: direccion,
        mail: mail,
        telefono: telefono

    ) {
        this.nombre = nombre
        this.apellidos = apellidos
        this.edad = edad
        this.dni = dni
        this.cumpleanos = cumpleanos
        this.color_favorito = color_favorito
        this.sexo = sexo
        this.notas = notas
        this.direccion = direccion
        this.mail = mail
        this.telefono = telefono
    }


    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string
    ) {
        this.nombre = nombre;
    }

    public getApellidos(): string {
        return this.apellidos;
    }

    public setApellidos(apellidos: string
    ) {
        this.apellidos = apellidos;
    }

    public getEdad(): number {
        return this.edad;
    }

    public setEdad(edad: number
    ) {
        this.edad = edad;
    }

    public getDni(): string {
        return this.dni;
    }

    public setDni(dni: string
    ) {
        this.dni = dni;
    }

    public getCumpleanos(): Date {
        return this.cumpleanos;
    }

    public setCumpleanos(cumpleanos: Date
    ) {
        this.cumpleanos = cumpleanos;
    }

    public getColorfavorito(): string {
        return this.color_favorito;
    }

    public setColorfavorito(colorfavorito: string
    ) {
        this.color_favorito = colorfavorito;
    }

    public getSexo(): string {
        return this.sexo;
    }

    public setSexo(sexo: string
    ) {
        this.sexo = sexo;
    }

    public getNotas(): string {
        return this.notas;
    }

    public setNotas(notas: string) {
        this.notas = notas;
    }

    public getDireccion(): direccion {
        return this.direccion;
    }

    public setDireccion(direccion: direccion
    ) {
        this.direccion = direccion;
    }

    public getMail(): mail {
        return this.mail;
    }

    public setMail(mail: mail
    ) {
        this.mail = mail;
    }

    public getTelefono(): telefono {
        return this.telefono;
    }

    public setTelefono(telefono: telefono) {
        this.telefono = telefono;
    }

    public infoPersona(): void {
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

    public validarDni(dni: string):boolean {
        if (this.dni = dni) {
            return true;
        } else return false;
    }

}