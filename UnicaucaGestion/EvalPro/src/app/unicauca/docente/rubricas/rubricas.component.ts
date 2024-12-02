import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-rubricas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './rubricas.component.html',
  styleUrl: './rubricas.component.css'
})
export class RubricasComponent {
  rubricas = [
    {id: 1, descripcion: "Rúbrica 1"},
    {id: 2, descripcion: "Rúbrica 2"}, {id: 3, descripcion: "Rúbrica 3"}
  ];
}
