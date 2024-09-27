import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy, OnChanges {
    protected name: string = "Tom";
    protected age: number = 25;

    constructor() {
        this.log("Constructor")
    }

    ngOnChanges(changes: SimpleChanges): void {
        for (const propName in changes){
            let chng = changes[propName];
            let cur = JSON.stringify(chng.currentValue);
            let prev = JSON.stringify(chng.previousValue);
            this.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
        }
    }

    ngOnDestroy(): void {
        this.log("OnDestroy");
    }

    ngOnInit(): void {
        this.log("OnInit");
    }

    private log = (message: string) => {
        console.log(message);
    }
}
