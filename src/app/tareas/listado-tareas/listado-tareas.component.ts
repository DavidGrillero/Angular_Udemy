import { Component} from '@angular/core';
import { TareasService } from '../services/tareas.service';
import { Tarea } from '../interfaces/tarea';

@Component({
  selector: 'app-listado-tareas',
  templateUrl: './listado-tareas.component.html',
  styleUrls: ['./listado-tareas.component.css']
})
export class ListadoTareasComponent {

  constructor(private tareasService: TareasService) {
  }
  
  get tareas() {
    return this.tareasService.tareas
  }

  delete(tarea: Tarea) {
    // invocamos servicio
    this.tareasService.deleteTarea(tarea.tarea);
  }
}
