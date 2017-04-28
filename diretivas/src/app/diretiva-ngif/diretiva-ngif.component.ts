import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.scss']
})
export class DiretivaNgifComponent implements OnInit {

  cursos: string[] = ["angular 2"];

  mostrarCurssos: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onMostrarCursos()
  {
    this.mostrarCurssos = !this.mostrarCurssos;
  }
}
