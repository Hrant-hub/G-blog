import {Directive, ElementRef, HostListener, Renderer2, ViewChild} from '@angular/core';

@Directive({selector: '[navigaition]'})
export class fornavDirective {
    constructor(public el: ElementRef, public rendrer: Renderer2) {

    }
    @ViewChild('hello', { static: false }) divHello: ElementRef;
    @HostListener('click') onClick() {
        this.rendrer.addClass(this.divHello.nativeElement, 'shows')
    }
}
