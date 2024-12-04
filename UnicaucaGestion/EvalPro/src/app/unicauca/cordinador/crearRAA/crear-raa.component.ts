import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CompetenciaAServiceService } from '../../servicios/competencia-aservice.service';


import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RA } from '../../entidades/ra';

@Component({
  selector: 'app-crear-raa',
  standalone: true,
  imports: [CommonModule, RouterModule,FormsModule],
  templateUrl: './crear-raa.component.html',
  styleUrl: './crear-raa.component.css'
})
export class CrearRAAComponent {
  ra: RA = { id: 0, descripcion: '', deshabilitado: false, rubricaList: [],competencia: { id: 1, tblCompId: 1, descripcion: '', tipo: '', nivel: '', deshabilitado: false } };

  constructor(private competenciaService: CompetenciaAServiceService, private router: Router) { }

  createRAA(): void {
    const competencia = this.ra.competencia;
    this.competenciaService.createCompetencia(competencia).subscribe(() => {
      this.router.navigate(['/listar-RAA']);
    });
  }
}
