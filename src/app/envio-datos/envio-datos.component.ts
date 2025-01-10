import { Component, OnInit } from '@angular/core';
import { GoogleSheetsService } from '../google-sheets.service';  
@Component({
  selector: 'app-envio-datos',
  templateUrl: './envio-datos.component.html',
  styleUrls: ['./envio-datos.component.css']
})
export class EnvioDatosComponent {

  formData = {
    Pregunta1: "Hola",
    Pregunta2: "Hola",
    Pregunta3: "Hola",
    Pregunta4: "Hola",
    Pregunta5: "Hola",
    Pregunta6: "Hola",
    Pregunta7: "Hola",
    Pregunta8: "Hola",
    Pregunta9: "Hola",
    Pregunta10: "Holaaa",
    Nombre: "Danaai"
};

constructor(private service: GoogleSheetsService){}
  Respuestas: string[]=["","","","","","","","","","","",""]
  ngOnInit(): void{
    for (let index = 0; index < this.Respuestas.length; index++) {
      this.Respuestas[index]=sessionStorage.getItem('Pregunta'+(index+1).toString())||''
      
    }
    
    this.formData={    
      Pregunta1: this.Respuestas[0],
      Pregunta2: this.Respuestas[1],
      Pregunta3: this.Respuestas[2],
      Pregunta4: this.Respuestas[3],
      Pregunta5: this.Respuestas[4],
      Pregunta6: this.Respuestas[5],
      Pregunta7: this.Respuestas[6],
      Pregunta8: this.Respuestas[7],
      Pregunta9: this.Respuestas[8],
      Pregunta10: this.Respuestas[9],
      Nombre: this.Respuestas[10]

    }
    this.enviarDatos()
    console.log('hola')
  }

  enviarDatos(): void {
    this.service.submit(this.formData).subscribe(
      response => console.log(response)
    )
  }
}
