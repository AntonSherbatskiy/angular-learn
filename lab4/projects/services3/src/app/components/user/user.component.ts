import { Component, inject } from '@angular/core';
import { IUserService } from '../../services/abstraction/user-service.interface';
import { User } from '../../models/user.model';
import { UserService } from '../../services/implementation/user.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrl: './user.component.css'
})
export class UserComponent {
    private userService: IUserService = inject(UserService);
    protected users?: User[];

    ngOnInit(): void {
        this.userService.getAllUsers().subscribe(result => {
            this.users = result;
        })
    }
}
