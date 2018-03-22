import {Directive, ElementRef} from '@angular/core';

@Directive({
    selector:'[defaultTheme]'
})

export class myFirstDirective {
    constructor(private el: ElementRef) {
        console.log(el);
        /*elementRef is an object which contain native element
          To use our directive as attribute directive we have to use ElementRef*/
        el.nativeElement.style.backgroundColor = "Red";
    }
}