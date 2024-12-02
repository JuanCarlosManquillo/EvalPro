import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-asignaturas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './asignaturas.component.html',
  styleUrl: './asignaturas.component.css'
})
export class AsignaturasComponent {
  asignaturas = [
    {id: 1, nombre: 'Software III', descripcion: 'Lo básico de la web, teorico', creditos: '3', semestre: '7'},
    {id: 2, nombre: 'Lab Software III', descripcion: 'Lo básico de la web, aplicado', creditos: '1', semestre: '7'},
    {id: 3, nombre: 'IA', descripcion: 'Conceptos básicos de machine learning', creditos: '4', semestre: '7'}
  ];
}
