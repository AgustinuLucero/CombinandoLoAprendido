import { MostrarTarea } from "./MostrarTarea.js";
import { MisTareas } from "./MisTareas.js";

export const vistaTareas = function(misTareas:MisTareas):{[key:string]:()=>void} { //funcion para mostrar detalles de las tareas
    const muestra = new MostrarTarea(misTareas);

    return{
        "1":()=>{
            console.log("Tareas:\n");
            muestra.mostrarTodas();        
        },
        "2":()=>{
            console.log("Tareas En Curso:\n");
            muestra.mostrarEstado("E");
        },
        "3":()=>{
             console.log("Tareas Pendientes:\n");
             muestra.mostrarEstado("P");
        },
        "4":()=>{
            console.log("Tareas Canceladas:\n");
            muestra.mostrarEstado("C");
        },
        "5":()=>{
            console.log("Tareas Terminadas:\n");
            muestra.mostrarEstado("T");
        },
        "0":()=>{
            console.log("Retornando al menu...")
        }
    }
}