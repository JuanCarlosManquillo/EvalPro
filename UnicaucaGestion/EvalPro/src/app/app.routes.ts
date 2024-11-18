import { Routes } from '@angular/router';
import { LoginComponent } from './unicauca/login/login.component';
import { CordinadorComponent } from './unicauca/cordinador/listarCompentenciaPrograma/cordinador.component';
import { CrearCompetenciaProgramaComponent } from './unicauca/cordinador/crearCompetenciaPrograma/crear-competencia-programa.component';

export const routes: Routes = [
    { path: '', redirectTo: '/unicauca/login', pathMatch: 'full' },
    { path: 'unicauca/login', component: LoginComponent },
    { path: 'cordinador', component: CordinadorComponent },
    { path: 'crear-competencia-programa', component: CrearCompetenciaProgramaComponent }
];