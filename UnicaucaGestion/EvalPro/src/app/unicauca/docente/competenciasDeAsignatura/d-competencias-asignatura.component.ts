import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-d-competencias-asignatura',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './d-competencias-asignatura.component.html',
  styleUrl: './d-competencias-asignatura.component.css'
})
export class DCompetenciasAsignaturaComponent {
  competencias = [
    { id: 1, competenciaPrograma: 'Competencia 1', competenciaAsignatura: 'Competencia 1' },
    { id: 2, competenciaPrograma: 'Competencia 1', competenciaAsignatura: 'Competencia 2' },
    { id: 3, competenciaPrograma: 'Competencia 3', competenciaAsignatura: 'Competencia 3' }
  ];
}
