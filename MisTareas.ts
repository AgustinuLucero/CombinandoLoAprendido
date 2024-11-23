import { cambiarDetalles } from './cambiarDetalles.js';
import {obtenerTarea} from './obtenerTarea.js';
import {Tarea} from './Tarea.js';
import { insertar } from './insertar.js';

export class MisTareas{
    private tareas:Tarea[] = [];

    agregarTarea(tarea:Tarea):Tarea[]{
        this.tareas = insertar(this.tareas,tarea);
        return this.tareas;
    }

    solicitaryagregarTarea():Tarea[]{
        const nuevaTarea = obtenerTarea();
        console.log("Tarea agregada");
        return this.agregarTarea(nuevaTarea); //retorno el array con la nueva tarea
    }

    ordenarTareas():Tarea[]{
        return [...this.tareas].sort((a, b) => a.titulo.localeCompare(b.titulo)); //ordeno alfabeticamente el array
    }

    crearCopiaConTareas(tarea: Tarea): Tarea{ 
        return{...tarea};  //hago una copia de la tarea que quiero modificar
    }

    cambiaDetalles(indice: number): void {
        const i = this.encontrarIndice(indice); //busco el indice que la persona eligio para editar
        if (i !== undefined && i >= 0){
            const copia = this.crearCopiaConTareas(this.tareas[i]); //creo un copia de la tarea
            const actualizada = cambiarDetalles(copia); 
            this.tareas = this.tareas.map((tareas,indice) => (indice === i? actualizada:tareas)); //cambio la tarea antigua por la modificada 
        }
    }
    

    encontrarTarea(titulo: string): number | undefined {
        const indice:number = this.tareas.findIndex(tarea => tarea.titulo === titulo); //busco la tarea con el titulo enviado
        return indice !== -1 ?  indice:undefined; //el indice es diferente a -1? entonces devuelvo el indice
    }
    
    encontrarIndice(indice: number): number {
        return (indice >= 1 && indice <= this.tareas.length) ? indice - 1 : -1; //me fijo  que la tarea ingresada este en rango del array, luego basicamente le resto uno para que sea el indice correspondiente
    }

    getTareas():Tarea[]{
        return [...this.tareas]; //devuelvo una copia del array
    }

}