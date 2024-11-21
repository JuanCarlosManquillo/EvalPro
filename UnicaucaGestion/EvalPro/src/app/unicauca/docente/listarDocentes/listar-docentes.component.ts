import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listar-docentes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listar-docentes.component.html',
  styleUrl: './listar-docentes.component.css'
})
export class ListarDocentesComponent {
  docentes = [
    { id: 1, nombre: 'Docente 1', tipo: 'Tiempo completo', estado: 'Activo', correo: 'docente1@example.com', asignatura: 'Matemáticas' },
    { id: 2, nombre: 'Docente 2', tipo: 'Catedrático', estado: 'Inactivo', correo: 'docente2@example.com', asignatura: 'Física' },
  ];
}
