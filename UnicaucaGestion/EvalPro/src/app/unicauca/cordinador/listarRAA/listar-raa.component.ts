import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Competencia } from '../../entidades/competencia';
import { RA } from '../../entidades/ra';
import { CompetenciaAServiceService } from '../../servicios/competencia-aservice.service';


@Component({
  selector: 'app-listar-raa',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listar-raa.component.html',
  styleUrl: './listar-raa.component.css'
})
export class ListarRAAComponent implements OnInit {
  resultados: RA[] = [];

  constructor(private competenciaService: CompetenciaAServiceService) { }

  ngOnInit(): void {
    this.competenciaService.getRAsByCompetenciaId(1).subscribe(data => {
      this.resultados = data;
    });
  }
  eliminarRAA(id: number): void {
    this.competenciaService.disableCompetencia(id).subscribe(() => {
        this.resultados = this.resultados.filter(ra => ra.id !== id);
    }
  );
}
}