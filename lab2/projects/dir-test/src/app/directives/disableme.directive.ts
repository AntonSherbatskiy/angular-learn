import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[disable-me]'
})
export class DisablemeDirective implements OnInit {

    constructor(private element: ElementRef, private renderer: Renderer2) {

    }

    ngOnInit(): void {
        console.log(this.element);
        if (this.isDisabled) {
            this.renderer.setStyle(this.element.nativeElement, "display", "none");
        }
    }

    @Input("disable-me") isDisabled: boolean = true;
}
