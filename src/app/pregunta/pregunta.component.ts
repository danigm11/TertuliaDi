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
        Titulo: 'Categorías',
        opciones: ['Drama', 'Comedia']
      },
      {
        Titulo: 'Categorías',
        opciones: ['Tragedia', 'Terror']
      },
      {
        Titulo: 'Categorías',
        opciones: ['Recuentos de la vida', 'Acción']
      },
      {
        Titulo: 'Categorías',
        opciones: ['Fantasía', 'Ciencia ficción']
      },
      {
        Titulo: 'Tipos de fantasía',
        opciones: ['Dark', 'Light']
      },
      {
        Titulo: 'Tipos de fantasía',
        opciones: ['Mitología', 'Medieval']
      },
      {
        Titulo: 'Tipos de fantasía',
        opciones: ['Brujas', 'Piratas']
      },     
      {
        Titulo: 'Tipos de fantasía',
        opciones: ['Vampiros/Lobos', 'Criaturas']
      },
      {
        Titulo: 'Tipos de fantasía',
        opciones: ['Cuentos', 'Sirenas']
      },
      {
        Titulo: 'Tipos de ciencia ficción',
        opciones: ['Distopía', 'Futurista', 'Steampunk', 'Espacial']
      },
      {
        Titulo: 'Categorías',
        opciones: ['Romance','Suspense']
      },      {
        Titulo: 'Categorías',
        opciones: ['Histórica', 'Policiaca']
      },
      {
        Titulo: 'Tiempo',
        opciones: ['Pasado', 'Presente', 'Futuro', 'Atemporal']
      },
      {
        Titulo: 'Protagonista',
        opciones: ['Uno', 'Una', 'Duo', 'Grupo']
      },
      {
        Titulo: 'Rango de edad',
        opciones: ['Infancia', 'Adolescencia', 'Madurez', 'Juventud','Adultez']
      },
      {
        Titulo: 'Tramas',
        opciones: ['Juegos/videojuegos', 'Acertijos']
      },
      {
        Titulo: 'Tramas',
        opciones: ['Realeza', 'Viaje']
      },
      {
        Titulo: 'Tramas',
        opciones: ['Sueños', 'Dinero', 'Escolar', 'Desaparición/Aparición']
      },
      {
        Titulo: 'Mascotas',
        opciones: ['Gato', 'Perro', 'Ratón', 'Pájaro','Conejo']
      },
      {
        Titulo: 'Romance Tropes',
        opciones: ['Enemies to Lovers', 'Friends to Lovers', 'Triángulo amoroso', 'Relación Falsa','Amor prohibido']
      },
      {
        Titulo: 'Cuando escribo, prefiero hacerlo en...',
        opciones: ['Una cafetería', 'Junto a la chimenea', 'En un tren', 'Al aire libre','Una biblioteca','En mi cuarto']
      }
    ];
    
  }
  recargarPagina(): void {
    window.location.reload();
  }
  cambiarPagina(Respuesta:number): void {
    const ruta = Number(this.id)+1
     this.nuevaRuta = `/Preguntas/${ruta}`;
    if(ruta==this.Preguntas.length+1){
      this.nuevaRuta = `/EnvioDatos`;
    }
    this.enviarPregunta(Respuesta)
    this.router.navigate([this.nuevaRuta]).then(() => {
      window.location.reload();
    });
  }
  enviarPregunta(Respuesta:number): void{
    sessionStorage.setItem('Pregunta'+this.id,this.Preguntas[Number(this.id)-1].opciones[Respuesta-1])  
  }
}

