import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RA } from '../../entidades/ra';
import { CompetenciaAServiceService } from '../../servicios/competencia-aservice.service';
import { RAPServiceService } from '../../servicios/rapservice.service';

@Component({
  selector: 'app-listar-rac',
  standalone: true,
  imports: [CommonModule, RouterLink,HttpClientModule],
  templateUrl: './listar-rac.component.html',
  styleUrl: './listar-rac.component.css'
})
export class ListarRACComponent implements OnInit {
  resultados: RA[] = [];
  competenciaId: number | null = null;

  constructor(private competenciaService: CompetenciaAServiceService, private rapService: RAPServiceService, private router: Router, private route: ActivatedRoute) { }
  

  ngOnInit(): void {
    const competenciaId = this.route.snapshot.paramMap.get('id');
    if (competenciaId) {
      this.competenciaId = +competenciaId;
      this.competenciaService.getRAsByCompetenciaId(+competenciaId).subscribe(
        (comp) => {
          this.resultados = comp;
        },
        (error) => {
          console.error('Error al obtener los resultados', error);
          // Maneja el error (por ejemplo, muestra un mensaje al usuario)
        }
      );
    } else {
      console.error('ID de competencia no válido');
      // Maneja el caso de ID no válido (por ejemplo, redirige al usuario o muestra un mensaje)
    }
  }



  public back(): void {
    this.router.navigate(['/cordinador']);
  }
  

  public agregar(): void {
    this.router.navigate(['/crear-RAP', this.competenciaId], { state: { competencia: this.resultados[0]?.competencia } });
  }

  public editar(id: number): void
  {
    this.router.navigate(['/actualizar-RAP',id], { state: { competencia: this.resultados[0]?.competencia } });
  }

  public eliminar(id: number): void {
    this.rapService.disableRA(id).subscribe(()=>
    {
      this.resultados = this.resultados.filter(ra => ra.id !== id);
    });
  }

}
