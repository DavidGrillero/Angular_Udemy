import { Injectable } from "@angular/core";
import { Tarea } from '../interfaces/tarea';

@Injectable()
 // Es un decorador - Sirve para hacer inyección de dependencias
export class TareasService {
  tareas: Array<Tarea> = [
    {
      tarea: 'Barrer',
      completada: false,
    },
    {
      tarea: 'Trapear',
      completada: false
    },
    {
      tarea: 'Cocinar',
      completada: false
    },
    {
      tarea: 'Leer',
      completada: false
    },
  ];
  
  deleteTarea(nombreTarea: string) {
    this.tareas = this.tareas.filter(tarea => tarea.tarea !== nombreTarea) // Esto me elimina lo que va dentro de los arrays
    console.log(nombreTarea);
  }

  completeTarea(nombreTarea: string) {
    const tarea : Tarea = this.tareas.find(tarea => {
    return tarea.tarea === nombreTarea
    })! // Find busco según el nombre el elemento. Localizo la tarea y le cambio el estado
    
    tarea.completada = !tarea.completada;
    
    console.log(tarea);
  }
}