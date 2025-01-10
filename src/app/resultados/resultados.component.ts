import { Component } from '@angular/core';
import { GoogleSheetsService } from '../google-sheets.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {
  data: any[] = [];

  constructor(private googleSheetsService: GoogleSheetsService) { }

  ngOnInit(): void {
    // Obtener los datos de Google Sheets
    this.googleSheetsService.getData().subscribe(response => {
      this.data = response;
      console.log('Data from Google Sheets:', this.data);
    }, error => {
      console.error('Error fetching data:', error);
    });
    while(1<1){
      console.log(this.data);
    }
    
    
  }
}
