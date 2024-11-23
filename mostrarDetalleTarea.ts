import{Tarea} from './Tarea.js';

export const mostrarDetallesTarea= function(tarea:Tarea, titulo:boolean){
    if(titulo){
        console.log(`  Titulo: ${tarea.titulo}`); //la uso solo para mostrar los titulos
        console.log('----------------------------------');
    }else{
        console.log(`  Titulo: ${tarea.titulo}`); //para mostrar todos los detalles
        console.log(`  Titulo: ${tarea.titulo}`);
        console.log(`  Descripción: ${tarea.descripcion}`);
        console.log(`  Estado: ${tarea.estado}`);
        console.log(`  Dificultad: ${tarea.dificultad}`);
        console.log(`  Última edición: ${tarea.ultedicion.toLocaleDateString('es-AR', { year: 'numeric', month: '2-digit', day: '2-digit' })}`); //asi tengo un formato DD/MM/YYYY
        console.log(`  Vencimiento: ${tarea.vencimiento.toLocaleDateString('es-AR', { year: 'numeric', month: '2-digit', day: '2-digit' })}`);
        console.log('----------------------------------');
    }
    
}