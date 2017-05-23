import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective {


//Má prática
  // constructor(private _elementRef: ElementRef) { 
  //   console.log(this._elementRef);
  //   this._elementRef.nativeElement.style.backgroundColor = "yellow";
  // }

  constructor(private _elementRef: ElementRef,
          private _renderer: Renderer
  ) { 
    //this._elementRef.nativeElement.style.backgroundColor = "yellow";
    this._renderer.setElementStyle(this._elementRef.nativeElement,'background-color', 'yellow');
  }

}
