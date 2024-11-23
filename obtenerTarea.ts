import {Tarea} from './Tarea.js';
import promptSync from 'prompt-sync';

export const obtenerTarea = function (): Tarea{
    const leer = promptSync();
    let titulo = leer('>Ingrese el titulo de la tarea: ');
    
    let descripcion = leer('>Ingrese la descripcion de la tarea: ');

    let estado = leer('>Ingrese la letra que represente su estado [P]endiente - [E]n curso - [T]erminada - [C]ancelada: ');
    estado = estado.toUpperCase(); //para pasar a mayusculas las letras

    let dificultad = parseInt(leer('>Ingrese la dificultad [1]-Facil [2]-Medio [3]-dificil: '));
    dificultad = Math.min(Math.max(dificultad,1),3); //primero veo que dificultad no sea menor a 1 y luego que no supere a 3

    const ultedicion:Date = new Date();

    let venc:string = leer('>Ingrese el vencimiento de la tarea(AAAA-MM-DD): ');
    let vencimiento = new Date(venc);
    const fechaActual = new Date();   
    vencimiento = new Date(Math.max(fechaActual.getTime(), vencimiento.getTime())); //veo que el valor numerico de las fechas sea mayor que la creacion de lo contrario se le asigna su valor

    const tarea:Tarea = definirTarea(titulo,descripcion,estado,dificultad,ultedicion,vencimiento);
    return tarea;
    
}

const definirTarea = function(titulo:string, descripcion:string, estado:string, dificultad:number,ultedicion:Date, vencimiento:Date):Tarea{
    return{titulo,descripcion,estado,dificultad,ultedicion,vencimiento}; //creo la tarea  con los datos ingresados
}