import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[bg]'
})
export class BgDirective implements OnInit {

    constructor(private element: ElementRef, private renderer: Renderer2) {

    }

    ngOnInit(): void {
        this.renderer.setStyle(this.element.nativeElement, "background", "blue");

        const anchor = new HTMLAnchorElement();
        anchor.href = "https://youtube.com";
        anchor.textContent = "Click me";
        this.renderer.appendChild(this.element.nativeElement, new HTMLAnchorElement())
    }
}
