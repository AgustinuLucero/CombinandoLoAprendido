import {Tarea} from './Tarea.js';
import { MisTareas } from './MisTareas.js';

export class BuscarTarea{
    private mistareas:MisTareas; 
    constructor(misTareas: MisTareas) {
        this.mistareas = misTareas;
        
    }

    busquedaTitulo = (titulo: string): Tarea | undefined => {
        return this.mistareas.getTareas().find((tarea:Tarea) => tarea.titulo === titulo); //para ver si existe la tarea con el titulo y mostrar los detalles
    }

    busquedaIndice(titulo:string):number | undefined{
        const i = this.mistareas.getTareas().findIndex((tarea:Tarea)=>tarea.titulo === titulo); //busco cual es el indice de la tarea
        return i === -1 ? undefined : i;  //si la encuentro retorno su indice, de lo contrario undefined
    }

}
