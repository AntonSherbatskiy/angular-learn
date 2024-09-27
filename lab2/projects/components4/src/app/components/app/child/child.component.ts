import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
    selector: 'child-comp',
    templateUrl: './child.component.html',
    styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit, OnChanges {
    @Input() name?: string;

    constructor() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        for (const propName in changes){
            const change = changes[propName];
            const current = JSON.stringify(change.currentValue);
            const prev = JSON.stringify(change.previousValue);
            this.log(`${propName}: currentValue = ${current}, previousValue = ${prev}`)
        }
    }

    ngOnInit(): void {
        this.log("OnInit");
    }


    private log = (message: string) => {
        console.log(message);
    }
}
