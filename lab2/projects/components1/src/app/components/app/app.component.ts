import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    protected name: string = "Petro";
    protected name2: string = "Tom";
    protected age: number = 24;
}
