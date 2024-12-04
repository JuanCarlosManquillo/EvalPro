import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,   // no se debe registrar en archvos auxiliares
  imports: [RouterOutlet], //routeroutlet -> enrutamiento entre componentes
  templateUrl: './app.component.html', //ruta a plantilla html que contiene la vista
  styleUrls: ['./app.component.css'] //lo mismo pero con css
})
export class AppComponent {
  title = 'EvalPro'; //para utilizar en otras partes de la aplicación
}
