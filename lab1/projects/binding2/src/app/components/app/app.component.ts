import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    protected isRed: boolean = false;

    protected changeBox = () => {
        this.isRed = !this.isRed;
    }

    protected blueBackground: string = "bg-blue";
    protected isYellow: boolean = true;
}
