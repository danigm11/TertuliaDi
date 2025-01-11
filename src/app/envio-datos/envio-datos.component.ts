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
    Pregunta11: "Hola",
    Pregunta12: "Hola",
    Pregunta13: "Hola",
    Pregunta14: "Hola",
    Pregunta15: "Hola",
    Pregunta16: "Hola",
    Pregunta17: "Hola",
    Pregunta18: "Hola",
    Pregunta19: "Hola",
    Pregunta20: "Holaaa",
    Pregunta21: "Hola",
    Pregunta22: "Hola",
    Nombre: "Danaai"
};

constructor(private service: GoogleSheetsService){}
  Respuestas: string[]=["","","","","","","","","","","","","","","","","","","","","","",""]
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
      Pregunta11: this.Respuestas[10],
      Pregunta12: this.Respuestas[11],
      Pregunta13: this.Respuestas[12],
      Pregunta14: this.Respuestas[13],
      Pregunta15: this.Respuestas[14],
      Pregunta16: this.Respuestas[15],
      Pregunta17: this.Respuestas[16],
      Pregunta18: this.Respuestas[17],
      Pregunta19: this.Respuestas[18],
      Pregunta20: this.Respuestas[19],
      Pregunta21: this.Respuestas[20],
      Pregunta22: this.Respuestas[21],
      Nombre: this.Respuestas[22]

    }
    this.enviarDatos()
  }

  enviarDatos(): void {
    this.service.submit(this.formData).subscribe(
      response => console.log(response)
    )
  }
}
