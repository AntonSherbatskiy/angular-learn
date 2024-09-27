import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    protected name: string = "Tom";
    protected age: number = 24;

    protected clicks: number = 0;
    protected onChange = (increased: any) => {
        increased == true ? this.clicks++ : this.clicks--;
    }
}
