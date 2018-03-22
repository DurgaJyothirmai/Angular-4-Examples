import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[hostListen]'
})

export class hostExample {

    @Input() hoverColor: string;
    constructor(private el:ElementRef) {

    }

    @HostListener('mouseover') onmouseover() {
        this.highlightColor(this.hoverColor);
    }

    @HostListener('mouseleave') onmouseleave() {
        this.highlightColor('pink');
    }

    public highlightColor(color) {
        console.log(this.el);
        this.el.nativeElement.style.backgroundColor = color;
    }
}