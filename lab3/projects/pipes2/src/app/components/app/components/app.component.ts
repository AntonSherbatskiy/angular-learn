import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';

@Component({
    selector: 'my-app',
    template: `
    <input type="number" [(ngModel)]="num">
    <div>
        Result without formatting {{num}}
        <br>
        Result with formatting {{num | format}}
    </div>
    <hr>
    <div>
        <input type="text" #userInput class="form-control">
        <button (click)="addUser(userInput.value)">Add</button>
        <p>Users with impure JOIN pipe: {{users | join}}</p>
        <hr>
        <p>Phone model: {{phone | async}}</p>
        <button (click)="showPhones()">Show phone models</button>
    </div>
  `,
    styleUrl: './app.component.css'
})
export class AppComponent {
    constructor() {
        this.showPhones();
    }

    protected num: number = 15.45;
    protected users: string[] = ["Tom", "Alice", "Sam", "Kate", "Bob"];

    protected addUser = (user: string): void => {
        if (user) {
            this.users.push(user);
        }
    }

    protected phones: string[] = ["iPhone 7", "LG G 5", "Honor 9", "Idol S4", "Nexus 6P"];
    protected phone: Observable<string> | undefined;

    showPhones() {
        this.phone = interval(500).pipe(map((i: number) => this.phones[i]));
    }
}
