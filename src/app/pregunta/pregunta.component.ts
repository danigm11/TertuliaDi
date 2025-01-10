import { Component, OnInit } from '@angular/core';
import { Pregunta } from '../model/Pregunta';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})

export class PreguntaComponent {
  Preguntas: Pregunta[]=[]
  id: string =''
  url: string=''
  nuevaRuta: string =''
  idNum: number=0

  ngOnInit(): void {
    this.url=this.router.url;
    this.id=this.url.charAt(this.url.length-2)+this.url.charAt(this.url.length-1)
    if(this.id.charAt(0)=='/'){
      this.id=this.id.charAt(1)
    }
    this.idNum=Number(this.id)
    console.log(this.id);
    
  }
  constructor(private router: Router) {
    this.Preguntas = [
      {
        Titulo: 'Categorías',
        opciones: ['Ficción', 'No Ficción']
      },
      {
        Titulo: 'Pregunta 2',
        opciones: ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4']
      },
      {
        Titulo: 'Pregunta 3',
        opciones: ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4']
      },
      {
        Titulo: 'Pregunta 4',
        opciones: ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4']
      },
      {
        Titulo: 'Pregunta 5',
        opciones: ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4']
      },
      {
        Titulo: 'Pregunta 6',
        opciones: ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4']
      },
      {
        Titulo: 'Pregunta 7',
        opciones: ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4']
      },
      {
        Titulo: 'Pregunta 8',
        opciones: ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4']
      },
      {
        Titulo: 'Pregunta 9',
        opciones: ['Paaa', 'Opción 2', 'Opción 3', 'Opción 4']
      },
      {
        Titulo: 'Pregunta 10',
        opciones: ['Holaa', 'Opción 2', 'Opción 3', 'Opción 4']
      }
    ];
    
  }
  recargarPagina(): void {
    window.location.reload();
  }
  cambiarPagina(Respuesta:number): void {
    const ruta = Number(this.id)+1
     this.nuevaRuta = `/Preguntas/${ruta}`;
    if(ruta==11){
      this.nuevaRuta = `/EnvioDatos`;
    }
    this.enviarPregunta(Respuesta)
    this.router.navigate([this.nuevaRuta]).then(() => {
      window.location.reload();
    });
  }
  enviarPregunta(Respuesta:number): void{
    sessionStorage.setItem('Pregunta'+this.id,Respuesta.toString())
  }
}

