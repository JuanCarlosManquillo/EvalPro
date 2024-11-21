import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listar-rac',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listar-rac.component.html',
  styleUrl: './listar-rac.component.css'
})
export class ListarRACComponent {
  resultados = [
    { id: 1, descripcion: 'Resultado 1' },
    { id: 2, descripcion: 'Resultado 2' },
    { id: 3, descripcion: 'Resultado 3' },
  ];
}
