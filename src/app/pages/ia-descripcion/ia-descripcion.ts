import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { IaService } from '../../services/ia.service';

@Component({
  selector: 'app-ia-descripcion',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './ia-descripcion.html',
  styleUrls: ['./ia-descripcion.css']
})
export class IaDescripcionComponent {
  animal = '';
  respuesta = '';
  cargando = false;
  error = '';

  constructor(private ia: IaService) {}

  generar() {
    if (!this.animal) return;
    this.cargando = true;
    this.error = '';
    this.ia.generarDescripcion(this.animal).subscribe({
      next: res => { this.respuesta = res.descripcion; this.cargando = false; },
      error: () => { this.error = 'Error al generar'; this.cargando = false; }
    });
  }
}
