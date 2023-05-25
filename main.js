"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const persona_1 = require("./persona");
const mail_1 = require("./mail");
const telefono_1 = require("./telefono");
const direccion_1 = require("./direccion");
console.log('------------------------------------------ Inicio de ejecución ------------------------------------------');
let mail1 = new mail_1.mail('Personal', 'ksanabria@hotmail.com');
let mail2 = new mail_1.mail('Empresa', 'funcionario@gov.com');
let mail3 = new mail_1.mail('Personal', 'josesanchez@hotmail.com');
let telefono1 = new telefono_1.telefono('Personal', '633100100');
let telefono2 = new telefono_1.telefono('Empresa', '987111445');
let telefono3 = new telefono_1.telefono('Personal', '657345890');
let direccion1 = new direccion_1.direccion('Imperio romano', 5, 3, 'E', '04009', 'Almería', 'Aguadulce');
let direccion2 = new direccion_1.direccion('Imperio Aregntino', 2, 4, 'A', '04009', 'Almería', 'Roquetas');
let direccion3 = new direccion_1.direccion('Imperio Tomano', 53, 8, 'P', '04009', 'Almería', 'Vícar');
let persona1 = new persona_1.persona('Ana', 'Sanabria D', 24, 'X12345678U', new Date("1990-07-13"), 'Azul', 'Femenino', 'Sin comentarios', direccion1, mail1, telefono1);
let persona2 = new persona_1.persona('Felipe', 'Sanchez F', 30, 'X34567890J', new Date("1993-08-24"), 'Verde', 'Masculino', 'Sin Funcionario activo', direccion2, mail2, telefono2);
let persona3 = new persona_1.persona('Helena', 'Baby J', 1, '00000000T', new Date("2023-04-15"), 'Rojo', 'Femenino', 'La mas linda del mundo', direccion3, mail3, telefono3);
persona1.infoPersona();
persona2.infoPersona();
persona3.infoPersona();
console.log('\n------------------------------------------ Buscando DNI  ------------------------------------------');
let dniFind = 'X34567890J';
let listaPersonas = [persona1, persona2, persona3];
for (let i = 0; i < listaPersonas.length; i++) {
    if (listaPersonas[i].validarDni(dniFind)) {
        listaPersonas[i].setDireccion(new direccion_1.direccion('Calle actualizada', 53, 8, 'P', '04009', 'Almería', 'Vícar'));
        listaPersonas[i].setMail(new mail_1.mail('Actualizado', 'Actual'));
        listaPersonas[i].setTelefono(new telefono_1.telefono('Actualizado', '000222333'));
    }
}
console.log('\n------------------------------------------ Registro actualizados  ------------------------------------------');
persona1.infoPersona();
persona2.infoPersona();
persona3.infoPersona();
console.log('------------------------------------------ Fin ejecución  ------------------------------------------');
