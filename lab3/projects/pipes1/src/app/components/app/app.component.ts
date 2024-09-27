import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <div>Date without formatting: {{myDate}}</div>
        <div>Date with formatting: {{myDate | date}}</div>
        <div>{{welcome | uppercase}}</div>
        <div>{{welcome | lowercase}}</div>
        <div>{{percentage | percent}}</div>
        <div>{{percentage | currency}}</div>
        <div>{{welcome | slice: 3}}</div>
        <div>{{welcome | slice: 6:11}}</div>
        <div>{{myNewDate | date:'dd/MM/yyyy'}}</div>
        <div>{{pi | number:'2.1-2'}}</div>
        <div>{{pi | number:'3.5-5'}}</div>
        <div>{{money | currency:'UA':'code'}}</div>
        <div>{{money | currency:'UA':'symbol-narrow'}}</div>
        <div>{{money | currency:'UA':'symbol':'1.1-1'}}</div>
        <div>{{money | currency:'UA':'symbol-narrow':'1.1-1'}}</div>
        <div>{{money | currency:'UA':'тільки сьогодні по ціні '}}</div>
        <div>{{message | slice: 6:11 | uppercase}}</div>
        <div>
            Number before formatting: {{x}}
            <br>
            <div>Number after formatting: {{x | format}}</div>
        </div>
        <hr>
        <div>{{users | join}}</div>
        <div>{{users | join:1}}</div>
        <div>{{users | join:1:3}}</div>
        <div>
            Number without sqrt pipe: {{numberSqrt}}
            <br>
            Number after sqrt pipe: {{numberSqrt | sqrt}}
        </div>
    `,
    styleUrl: './app.component.css'
})
export class AppComponent {
    protected myDate: Date = new Date(1961, 3, 12);
    protected welcome: string = "Hello world!";
    protected percentage: number = 0.14;
    protected myNewDate: Date = new Date();
    protected pi: number = 3.1415;
    protected money: number = 23.45;
    protected message: string = "Hello world!";
    protected x: number = 15.45;
    protected users = ["Tom", "Alice", "Sam", "Kate", "Bob"];
    protected numberSqrt: number = 16;
}
