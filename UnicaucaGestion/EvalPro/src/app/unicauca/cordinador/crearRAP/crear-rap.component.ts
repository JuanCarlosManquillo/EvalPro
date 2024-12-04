import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RA } from '../../entidades/ra';
import { RAPServiceService } from '../../servicios/rapservice.service';
import { Competencia } from '../../entidades/competencia';
import { CompetenciaAServiceService } from '../../servicios/competencia-aservice.service';

@Component({
  selector: 'app-crear-rap',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, HttpClientModule],
  templateUrl: './crear-rap.component.html',
  styleUrl: './crear-rap.component.css'
})

export class CrearRAPComponent {
  public RA : RA = new RA();
  public competencia: Competencia = new Competencia();

  constructor(private rapservice: RAPServiceService, private compAService: CompetenciaAServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const competenciaId = this.route.snapshot.paramMap.get('id');
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { competencia: Competencia };

    if (state?.competencia) {
      this.competencia = state.competencia;
      this.RA.competencia = this.competencia;
    } else if (competenciaId) {
      this.compAService.getCompetenciaById(+competenciaId).subscribe(
        (comp) => {
          this.competencia = comp;
          this.RA.competencia = comp;
        },
        (error) => {
          console.error('Error al obtener la competencia', error);
        }
      );
    } else {
      console.warn('No se proporcionó un ID de competencia');
    }
  }
  

  public guardar(): void {
    console.log('RA a guardar', this);

    this.rapservice.createRA(this.RA).subscribe(
      (comp) => {
        console.log('RA creado', comp);
        this.router.navigate(['/cordinador']);
      },
      (error) => {
        console.error('Error al crear el RA', error);
      }
    );
  }

  

}

