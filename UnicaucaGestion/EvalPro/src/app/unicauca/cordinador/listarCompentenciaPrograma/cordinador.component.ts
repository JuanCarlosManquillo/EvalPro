import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Competencia } from '../../entidades/competencia';
import { CompetenciaAServiceService } from '../../servicios/competencia-aservice.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-cordinador',
  standalone: true,
  imports: [CommonModule, RouterModule,RouterLink,HttpClientModule],
  templateUrl: './cordinador.component.html',
  styleUrls: ['./cordinador.component.css']
})
export class CordinadorComponent {
  competencia: Competencia[] = [];

  constructor(private competenciaService: CompetenciaAServiceService, private router: Router) { }

  ngOnInit(): void {
    this.competenciaService.getAllCompetencias().subscribe(data => {
      this.competencia = data;

    });
  }

  getById(id: number): void {
    this.router.navigate(['/actualizar-competencia', id]);
  }

  detallesCompetencia(id: number): void {
    this.router.navigate(['/listar-RAC', id]);
  }
  
  eliminarRAA(id: number): void {
    this.competenciaService.disableCompetencia(id).subscribe(() => {
        this.competencia = this.competencia.filter(competencia => competencia.id !== id);
      }
    );
  }
}