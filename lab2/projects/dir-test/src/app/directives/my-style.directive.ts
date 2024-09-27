import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[my-style]'
})
export class MyStyleDirective implements OnInit {

    constructor(private element: ElementRef, private renderer: Renderer2) {
    }

    @Input("my-style") styles?: { [key: string]: boolean };

    ngOnInit(): void {
        for (const st in this.styles){
            if (this.styles[st]) {
                const parsed = this.s
            }
        }
    }
}
