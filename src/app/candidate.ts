import { Modulo } from "./modulo";

export class Candidate {
    timestamp: string;
    cedula: string;
    nombre1: string;
    nombre2: string;
    apellido1: string;
    apellido2: string;
    sexo: string;
    estadoCivil: string;
    fechaNacimiento: string;
    nacimientoPais: string;
    nacimientoEstado: string;
    telefonoHabitacion: string;
    telefonoCelular: string;
    correoElectronico: string;
    direccionEstado: string;
    direccionMunicipio: string;
    direccionParroquia: string;
    direccionHabitacion: string;
    discapacidad: string;
    tipoDiscapacidad: string;
    carnetDiscapacidad: string;
    tituloUniversitario: string;
    formacionContinua: string;
    modulos: Modulo[];
    
    constructor(){
        this.timestamp = '';
        this.cedula = '';
        this.nombre1 = '';
        this.nombre2 = '';
        this.apellido1 = '';
        this.apellido2 = '';
        this.sexo = '';
        this.estadoCivil = '';
        this.fechaNacimiento = '';
        this.nacimientoPais = '';
        this.nacimientoEstado = '';
        this.telefonoHabitacion = '';
        this.telefonoCelular = '';
        this.correoElectronico = '';
        this.direccionEstado = '';
        this.direccionMunicipio = '';
        this.direccionParroquia = '';
        this.direccionHabitacion = '';
        this.discapacidad = '';
        this.tipoDiscapacidad = '';
        this.carnetDiscapacidad = '';
        this.tituloUniversitario = '';
        this.formacionContinua = '';
        this.modulos = [];
    }
}