import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../services/http.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'my-app',
  template: `
    <ul>
      <li *ngFor="let user of users | async">
      <p>Ім’я користувача: {{user.name}}</p>
      <p>Вік користувача: {{user.age}}</p>
      </li>
    </ul>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  users: Observable<User[]> | undefined;
  constructor(private httpService: HttpService)
  {

  }

  ngOnInit() {
    this.users = this.httpService.getUsers() as Observable<User[]>;
  }
}
