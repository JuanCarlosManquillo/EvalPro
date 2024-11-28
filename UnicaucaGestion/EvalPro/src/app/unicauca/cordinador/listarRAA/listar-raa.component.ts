import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listar-raa',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listar-raa.component.html',
  styleUrl: './listar-raa.component.css'
})
export class ListarRAAComponent {
  resultados = [
    { id: 1, descripcion: 'Resultado 1' },
    { id: 2, descripcion: 'Resultado 2' },
    { id: 3, descripcion: 'Resultado 3' },
  ];
}
