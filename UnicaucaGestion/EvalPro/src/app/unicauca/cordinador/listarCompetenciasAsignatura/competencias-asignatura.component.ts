import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-competencias-asignatura',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './competencias-asignatura.component.html',
  styleUrl: './competencias-asignatura.component.css'
})
export class CompetenciasAsignaturaComponent {
  competencias = [
    { id: 1, competenciaPrograma: 'Competencia 1', competenciaAsignatura: 'Competencia 1' },
    { id: 2, competenciaPrograma: 'Competencia 1', competenciaAsignatura: 'Competencia 2' },
    { id: 3, competenciaPrograma: 'Competencia 3', competenciaAsignatura: 'Competencia 3' }
  ];
}
