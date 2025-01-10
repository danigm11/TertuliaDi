import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PreguntaComponent } from './pregunta/pregunta.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { EnvioDatosComponent } from './envio-datos/envio-datos.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PreguntaComponent,
    ResultadosComponent,
    EnvioDatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
