import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-frase-detail',
  templateUrl: './frase-detail.component.html',
  styleUrls: ['./frase-detail.component.css']
})
export class FraseDetailComponent implements OnInit {

  @Input('frase') frase: {autor: string, contenido: string, fecha: Date};

  constructor() { }

  ngOnInit() {
  }

}
