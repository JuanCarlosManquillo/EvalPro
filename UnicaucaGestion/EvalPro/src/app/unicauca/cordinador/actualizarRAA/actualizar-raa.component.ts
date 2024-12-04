import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CompetenciaAServiceService } from '../../servicios/competencia-aservice.service';
import { RA } from '../../entidades/ra';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-actualizar-raa',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './actualizar-raa.component.html',
  styleUrl: './actualizar-raa.component.css'
})
export class ActualizarRAAComponent  {
  ra: RA = { id: 0, descripcion: '', deshabilitado: false, rubricaList: [],competencia: { id: 1, tblCompId: 1, descripcion: '', tipo: '', nivel: '', deshabilitado: false } };

  constructor(private competenciaService: CompetenciaAServiceService, private route: ActivatedRoute, private router: Router) { }

  // ngOnInit(): void {
  //   const id = +this.route.snapshot.paramMap.get('id')!;
  //   this.competenciaService.getCompetenciaById(id).subscribe(data => {
  //     this.ra = { ...data, competencia: this.ra.competencia };
  //   });
  // }

  updateRAA(): void {
    this.competenciaService.updateCompetencia(this.ra.competencia.id, this.ra.competencia).subscribe(() => {
      this.router.navigate(['/listar-RAA']);
    });
  }
}
