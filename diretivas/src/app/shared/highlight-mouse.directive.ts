import { Directive, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

//Opção 1 - menos bonita
  // @HostListener('mouseenter') onMouseOver(){
  //     this._renderer.setElementStyle(this._elementRef.nativeElement, 
  //     'background-color','yellow')
  // }

  // @HostListener('mouseleave') onMouseLeave(){
  //     this._renderer.setElementStyle(this._elementRef.nativeElement, 
  //     'background-color','white')
  // }

   @HostListener('mouseenter') onMouseOver(){
      this.backgroundColor = 'yellow';
   }

   @HostListener('mouseleave') onMouseLeave(){
      this.backgroundColor = 'white';
  }

  @HostBinding('style.backgroundColor') backgroundColor : string;

  constructor(
    //private _elementRef: ElementRef,
    //private _renderer: Renderer
  ) { }

}
