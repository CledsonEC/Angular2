import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-propertie.component.html',
  styleUrls: ['./output-propertie.component.css']
})
export class OutputPropertieComponent implements OnInit {

  @Input() valor : number = 0;

  @Output() mudouValor = new EventEmitter();


  incrementa(){
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor});
  }

decrementa(){
  this.valor--;
  this.mudouValor.emit({novoValor: this.valor});
}


  constructor() { }

  ngOnInit() {
  }

}
