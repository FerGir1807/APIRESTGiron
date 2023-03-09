import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/components/inicio/inicio.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'cursos', loadChildren: () => import('./cursos/cursos.module').then((cursoModule) => cursoModule.CursosModule) },
  { path: 'alumnos', loadChildren: () => import('./alumnos/alumnos.module').then((alumnoModulo) => alumnoModulo.AlumnosModule) },
  { path: 'inscripciones', loadChildren: () => import('./inscripciones/inscripciones.module').then((inacripcionModule) => inacripcionModule.InscripcionesModule) },
  { path: 'login', loadChildren: () => import('./core/components/login/login.module').then((loginModule) => loginModule.LoginModule) },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
