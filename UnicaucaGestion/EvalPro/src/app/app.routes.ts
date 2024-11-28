import { Routes } from '@angular/router';
import { LoginComponent } from './unicauca/login/login.component';
import { CordinadorComponent } from './unicauca/cordinador/listarCompentenciaPrograma/cordinador.component';
import { CrearCompetenciaProgramaComponent } from './unicauca/cordinador/crearCompetenciaPrograma/crear-competencia-programa.component';
import { ListarDocentesComponent } from './unicauca/docente/listarDocentes/listar-docentes.component';
import { CrearRAPComponent } from './unicauca/cordinador/crearRAP/crear-rap.component';
import { ListarRACComponent } from './unicauca/cordinador/listarRAC/listar-rac.component';
import { ActualizarCompetenciaComponent } from './unicauca/cordinador/actualizarCompetencia/actualizar-competencia.component';
import { ActualizarRAPComponent } from './unicauca/cordinador/actualizarRAP/actualizar-rap.component';
import { AsignaturasComponent } from './unicauca/asignatura/listar/coordinador/asignaturas.component';
import { CompetenciasAsignaturaComponent } from './unicauca/cordinador/listarCompetenciasAsignatura/competencias-asignatura.component';
import { ListarRAAComponent } from './unicauca/cordinador/listarRAA/listar-raa.component';
import { CrearCompetenciaAsignaturaComponent } from './unicauca/cordinador/crearCompetenciasAsignatura/crear-competencia-asignatura.component';
import { CrearRAAComponent } from './unicauca/cordinador/crearRAA/crear-raa.component';
import { ActualizarCompetenciaAsignaturaComponent } from './unicauca/cordinador/actualizarCompetenciaAsignatura/actualizar-competencia-asignatura.component';
import { ActualizarRAAComponent } from './unicauca/cordinador/actualizarRAA/actualizar-raa.component';



export const routes: Routes = [
    { path: '', redirectTo: '/unicauca/login', pathMatch: 'full' },
    { path: 'unicauca/login', component: LoginComponent },
    { path: 'asignaturas', component: AsignaturasComponent},
    { path: 'cordinador', component: CordinadorComponent },
    { path: 'docente', component: ListarDocentesComponent },
    { path: 'crear-competencia-programa', component: CrearCompetenciaProgramaComponent },
    { path: 'crear-competencia-asignatura', component: CrearCompetenciaAsignaturaComponent },
    { path: 'crear-RAP', component: CrearRAPComponent},
    { path: 'crear-RAA', component: CrearRAAComponent},
    { path: 'listar-competencia-asignatura', component: CompetenciasAsignaturaComponent },
    { path: 'listar-RAC', component: ListarRACComponent},
    { path: 'listar-RAA', component: ListarRAAComponent},
    { path: 'actualizar-competencia', component: ActualizarCompetenciaComponent },
    { path: 'actualizar-competencia-asignatura', component: ActualizarCompetenciaAsignaturaComponent},
    { path: 'actualizar-RAA', component: ActualizarRAAComponent},
    { path: 'actualizar-RAP', component: ActualizarRAPComponent }
];