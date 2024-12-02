import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-listar-asignatura-docente',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listar-asignatura-docente.component.html',
  styleUrl: './listar-asignatura-docente.component.css'
})
export class ListarAsignaturaDocenteComponent {
  asignaturas = [
    {id: 1, nombre: 'Software III', descripcion: 'Lo básico de la web, teorico', creditos: '3', semestre: '7'},
    {id: 2, nombre: 'Lab Software III', descripcion: 'Lo básico de la web, aplicado', creditos: '1', semestre: '7'},
    {id: 3, nombre: 'IA', descripcion: 'Conceptos básicos de machine learning', creditos: '4', semestre: '7'}
  ];
}

