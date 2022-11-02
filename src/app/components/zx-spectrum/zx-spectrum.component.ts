import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zx-spectrum',
  templateUrl: './zx-spectrum.component.html',
  styleUrls: ['./zx-spectrum.component.css']
})
export class ZxSpectrumComponent implements OnInit {

  total_juegos = 0

  datos_juego: any

   juegos_cinta: any


  constructor() { }

  ngOnInit(): void {  
    // Se obtiene el numero de registros al iniciar la aplicacion
    this.total_juegos = 763
  }

  buscarCinta() {
    // Busca todos los juegos en la cinta introducida por el usuario
    this.juegos_cinta = [

      {"numero": "234", "nombre": "FILECARD", "tipo": "UTILIDAD", "cinta": "6", "registro": "464"},
      {"numero": "217", "nombre": "ESCAPE FROM SINGE'S CASTLE", "tipo": "ARCADE", "cinta": "3", "registro": "423"},
      {"numero": "219", "nombre": "ESPIONAGE ISLAND", "tipo": "ARCADE", "cinta": "F", "registro": "77"},
      {"numero": "231", "nombre": "FEUD", "tipo": "VIDEOAVENTURA", "cinta": "21", "registro": "643"},
      {"numero": "233", "nombre": "FIGHTING WARRIOR", "tipo": "ARCADE", "cinta": "N", "registro": "194"}
    ]

    this.juegos_cinta = this.juegos_cinta.sort((a:any, b:any) => (Number(a.registro) <= Number(b.registro)) ? -1 : 1);


  }

  buscarJuego() {
    this.datos_juego = {"numero": "234", "nombre": "FILECARD", "tipo": "UTILIDAD", "cinta": "6", "registro": "464"}
  }



}
