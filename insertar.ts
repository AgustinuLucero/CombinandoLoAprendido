import { Tarea } from "./Tarea.js";

export const insertar = function(tareas:Tarea[],tarea:Tarea): Tarea[]{
    return [...tareas,tarea]; //hago una copia de todas las tareas y le agrego la nueva
}