import { Routes } from '@angular/router';
import { LoginComponent } from './unicauca/login/login.component';
import { CordinadorComponent } from './unicauca/cordinador/listarCompentenciaPrograma/cordinador.component';
import { CrearCompetenciaProgramaComponent } from './unicauca/cordinador/crearCompetenciaPrograma/crear-competencia-programa.component';
import { ListarDocentesComponent } from './unicauca/docente/listarDocentes/listar-docentes.component';
import { CrearRAPComponent } from './unicauca/cordinador/crearRAP/crear-rap.component';
import { ListarRACComponent } from './unicauca/cordinador/listarRAC/listar-rac.component';
import { ActualizarCompetenciaComponent } from './unicauca/cordinador/actualizarCompetencia/actualizar-competencia.component';
import { ActualizarRAPComponent } from './unicauca/cordinador/actualizarRAP/actualizar-rap.component';

export const routes: Routes = [
    { path: '', redirectTo: '/unicauca/login', pathMatch: 'full' },
    { path: 'unicauca/login', component: LoginComponent },
    { path: 'cordinador', component: CordinadorComponent },
    { path: 'crear-competencia-programa', component: CrearCompetenciaProgramaComponent },
    { path: 'docente', component: ListarDocentesComponent },
    { path: 'crear-RAP', component: CrearRAPComponent},
    { path: 'listar-RAC', component: ListarRACComponent},
    { path: 'actualizar-competencia', component: ActualizarCompetenciaComponent },
    { path: 'actualizar-RAP', component: ActualizarRAPComponent }
];