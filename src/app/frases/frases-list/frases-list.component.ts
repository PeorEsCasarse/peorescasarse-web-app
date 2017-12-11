import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frases-list',
  templateUrl: './frases-list.component.html',
  styleUrls: ['./frases-list.component.css']
})
export class FrasesListComponent implements OnInit {

  listadoFrases = [
    {
      autor: 'autor 1', 
      contenido: 'Contenido frase 1', 
      fecha: new Date()
    },
    {
      autor: 'autor 2', 
      contenido: 'Contenido frase 2', 
      fecha: new Date()
    },
    {
      autor: 'autor 3', 
      contenido: 'Contenido frase 3', 
      fecha: new Date()
    },
    {
      autor: 'autor 4', 
      contenido: 'Contenido frase 4', 
      fecha: new Date()
    },
    {
      autor: 'autor 5', 
      contenido: 'Contenido frase 5', 
      fecha: new Date()
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
