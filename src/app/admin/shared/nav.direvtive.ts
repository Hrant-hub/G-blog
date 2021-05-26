import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';



@Directive({selector: '[fornav]'})

export class direct{

    @HostListener('window:scrollTop' , ['$event']) scroll(e: Event) {
        console.log(e.AT_TARGET)
    }

    constructor(
    ) {
    }

}
