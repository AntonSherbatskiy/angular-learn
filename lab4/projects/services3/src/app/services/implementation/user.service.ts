import {IUserService} from "../abstraction/user-service.interface";
import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { User } from "../../models/user.model";
import { environment } from "../../../environments/environment.development";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class UserService implements IUserService {
	private httpClient: HttpClient = inject(HttpClient);

    public getAllUsers = (): Observable<User[]> => {
        return this.httpClient.get<User[]>(environment.jsonPlaceHolder.usersURL);
    }
}
