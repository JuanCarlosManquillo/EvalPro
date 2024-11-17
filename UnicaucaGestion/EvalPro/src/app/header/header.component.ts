import { Component } from '@angular/core';

@Component({ //componente para html <app-header>
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  titulo: string = 'EvalPro';
  subtitulo: string = 'Sistema de Evaluación de Competencias y Resultados de Aprendizaje';
}
