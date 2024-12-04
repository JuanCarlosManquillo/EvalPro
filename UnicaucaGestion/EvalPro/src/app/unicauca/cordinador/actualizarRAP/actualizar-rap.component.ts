import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RA } from '../../entidades/ra';
import { Competencia } from '../../entidades/competencia';
import { RAPServiceService } from '../../servicios/rapservice.service';
import { CompetenciaAServiceService } from '../../servicios/competencia-aservice.service';

@Component({
  selector: 'app-actualizar-rap',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, HttpClientModule],
  templateUrl: './actualizar-rap.component.html',
  styleUrl: './actualizar-rap.component.css'
})
export class ActualizarRAPComponent {

  public RA : RA = new RA();
  public competencia: Competencia = new Competencia();

  constructor(private rapservice: RAPServiceService, private compAService: CompetenciaAServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const competenciaId = this.route.snapshot.paramMap.get('id');
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { competencia: Competencia };

    if(competenciaId)
    {
      this.rapservice.getRAById(+competenciaId).subscribe(
        (ra) => 
        {
          this.RA = ra;
        }
      )
    } else {
      console.warn('No se proporcionó un ID de competencia');
    }
  }

  actualizar(): void
  {
    this.rapservice.updateRA(this.RA).subscribe(
      {
        next: (response) => {
          console.log('RA actualizado', response);
          this.router.navigate(['/cordinador']);
        }
      }
      
    )
  }

}
