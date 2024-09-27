import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    protected name?: string = "Anton";
    protected age?: number = 20;
    protected colspan: number = 2;
    protected counter1: number = 0;
    protected counter2: number = 0;

    protected increase1 = () => {
        this.counter1++;
    }

    protected increase2 = (eventInfo: string) => {
        this.counter2++;
        console.log(eventInfo);
    }
}
