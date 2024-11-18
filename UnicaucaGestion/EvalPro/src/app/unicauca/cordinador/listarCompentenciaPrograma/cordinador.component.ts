import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cordinador',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cordinador.component.html',
  styleUrls: ['./cordinador.component.css']
})
export class CordinadorComponent {
  competencias = [
    { id: 1, nombre: 'Competencia 1', nivel: 'Alto' },
    { id: 2, nombre: 'Competencia 2', nivel: 'Medio' },
    { id: 3, nombre: 'Competencia 3', nivel: 'Bajo' }
  ];
}
