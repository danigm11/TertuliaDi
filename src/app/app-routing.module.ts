import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { PreguntaComponent } from './pregunta/pregunta.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { EnvioDatosComponent } from './envio-datos/envio-datos.component';

const routes: Routes = [

  { path: 'home', component: MainPageComponent},
  { path: 'Preguntas/:id', component: PreguntaComponent},
  { path: 'Resultados', component: ResultadosComponent},
  { path: 'EnvioDatos', component: EnvioDatosComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
