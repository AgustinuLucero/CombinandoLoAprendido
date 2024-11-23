import promptSync from 'prompt-sync';
import {Tarea} from './Tarea.js';

export const cambiarDetalles= function(tareas:Tarea):Tarea{
    const leer = promptSync();
    console.log("Deja en blanco para conservar el valor actual.");

    const nuevoTitulo = leer(`Título actual (${tareas.titulo}): `) || tareas.titulo; // si no ingresa nada queda el valor actual
    const nuevaDescripcion = leer(`Descripción actual (${tareas.descripcion}): `) || tareas.descripcion;

    const nuevoEstado = (leer(`Estado actual (${tareas.estado}) [P]endiente-[E]n curso-[T]erminada-[C]ancelada: `) || tareas.estado).toUpperCase();
    
    let nuevaDificultad = leer(`Dificultad actual (${tareas.dificultad}) [1]-Fácil [2]-Medio [3]-Difícil: `);
    const dificultad = nuevaDificultad ? Math.min(Math.max(1,3),3) : tareas.dificultad; 

    const nuevoVencimientoInput = leer(`Vencimiento actual (${tareas.vencimiento.toLocaleDateString()}): `);
    const vencimiento = nuevoVencimientoInput ? new Date(nuevoVencimientoInput) : tareas.vencimiento;

    const ultedicion = new Date();

    
    
    return {
        ...tareas, //copia de las propiedades de la tarea que se paso y se cambian por las nuevas
        titulo: nuevoTitulo, 
        descripcion: nuevaDescripcion,
        estado: nuevoEstado, //Type '() => string' is not assignable to type 'string'.
        dificultad: dificultad,
        vencimiento: vencimiento,
        ultedicion: ultedicion
    }
}


