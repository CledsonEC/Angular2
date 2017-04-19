import { Component, OnInit, Input, EventEmitter,Output, ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-propertie.component.html',
  styleUrls: ['./output-propertie.component.css']
})
export class OutputPropertieComponent implements OnInit {

  @Input() valor : number = 0;

  @Output() mudouValor = new EventEmitter();


  @ViewChild('campoInput') campoValorInput : ElementRef;

  incrementa(){
    
   this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({novoValor: this.valor});
  }

decrementa(){
  this.campoValorInput.nativeElement.value--;
  this.mudouValor.emit({novoValor: this.valor});
}


  constructor() { }

  ngOnInit() {
  }

}
