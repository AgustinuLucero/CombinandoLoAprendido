import {Tarea} from './Tarea.js';
import { MisTareas } from './MisTareas.js';
import { mostrarDetallesTarea } from './mostrarDetalleTarea.js';

export class  MostrarTarea{
    private misTareas: MisTareas;

    constructor(misTareas: MisTareas) {
        this.misTareas = misTareas;
    }

    mostrarTodas():void{ //muestro todas las tareas agregadas
        this.misTareas.getTareas().forEach((tarea:Tarea,indice:number) => {
            console.log(`${indice + 1}: `);
            mostrarDetallesTarea(tarea,true);
        });
    }

    mostrarEstado(estado:string):string[]{
        return this.misTareas.getTareas().filter(tarea => tarea.estado === estado) //filtro las tareas segun el estado elegido
            .map((tarea,indice) => `${indice +1 }: ${mostrarDetallesTarea(tarea,true)}`); //hago un array donde cada elemento son los detalles de la tarea
    }
}