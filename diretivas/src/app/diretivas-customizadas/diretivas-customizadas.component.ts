import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-customizadas',
  templateUrl: './diretivas-customizadas.component.html',
  styleUrls: ['./diretivas-customizadas.component.scss']
})
export class DiretivasCustomizadasComponent implements OnInit {

 mostrarCurssos: boolean = false;

  constructor() { }

  ngOnInit() {
  }

 onMostrarCursos()
  {
    this.mostrarCurssos = !this.mostrarCurssos;
  }

  

}
