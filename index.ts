import PromptSync from "prompt-sync";
import { menuinstrucciones, menuvisualizacion } from "./instrucciones.js";
import { vistaTareas } from "./vistaTareas.js";
import { MisTareas } from "./MisTareas.js";
import { BuscarTarea } from "./BuscarTarea.js";
import { mostrarDetallesTarea } from "./mostrarDetalleTarea.js";

const tareas = new MisTareas();
const buscar = new BuscarTarea(tareas);

const menu = function():void{
    const leer = PromptSync();
    let num:number;
    let op:string;
    
    menuinstrucciones();
    op = leer("Ingrese una opcion: ");

    const acciones:{[key:string]: ()=> void} = { //hago un objeto donde cada clave es una opcion del menu
        "1": () => {
            menuvisualizacion();
            
            op = leer("Ingrese una opcion: ");
            const vista = vistaTareas(tareas);

            if (vista[op]) {
                vista[op]();
                num = parseInt(leer("Ingrese el [numero] de la tarea para editarla [0] para volver: "));

                if (!isNaN(num) && num > 0 && num <= tareas.getTareas().length) {
                    const tareaSeleccionada = tareas.getTareas()[num - 1]; //creo una tarea para luego mostrar los detalles, con la eleccion -1 para ajustar el indice
                    mostrarDetallesTarea(tareaSeleccionada,false);
                    tareas.cambiaDetalles(num); // Modifica los detalles directamente
                } else {
                    console.log("Volviendo..");
                }

            } else {
                console.log("ERROR");
            }           

            leer("Presione una tecla..");
            console.clear();
            menu();
        },

        "2": () => {
            let titulo:string, indice:number | undefined;

            titulo = leer(">Ingrese el titulo a buscar:");
            let tareabuscada = buscar.busquedaTitulo(titulo);

            if(tareabuscada){
                mostrarDetallesTarea(tareabuscada,false);
            }

            let entrada: "0" | "E" = leer("Ingrese el [E] para editar la tarea o [0] para volver: ").toUpperCase() as "0" | "E"; //la entrada es estrictamente uno de los dos valores posibles

            const edit = {
                "0": () => console.log("Volviendo al menú principal..."),
                "E": () => {
                    indice = buscar.busquedaIndice(titulo); // busca el índice según el título
                    if (indice !== undefined) {
                        tareas.cambiaDetalles(indice + 1); // cambia detalles
                    } else {
                        console.log("No se encontró la tarea con el título especificado.");
                    }
            }   
        };

            // ejecuta editar o volveer
            edit[entrada]();
            
            leer("Presione una tecla..");
            console.clear();
            menu();
        },

        "3": () => {
            tareas.solicitaryagregarTarea();
            tareas.ordenarTareas();
            leer("Presione una tecla..");
            console.clear();
            menu();
        },

        "0": () => {
            console.log("Programa cerrado");
            return;
        },
    }

    if(acciones[op]){
        acciones[op]();
    }else{
        console.log("ERROR");
        leer("Presione una tecla..");
        console.clear();
        menu();
    }
}

menu();