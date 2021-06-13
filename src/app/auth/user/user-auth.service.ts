import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from 'src/app/models/user';
import { TokenService } from '../token.service';

@Injectable({
    providedIn: 'root',
})
export class UserAuthService {
    private userSubject = new BehaviorSubject<UserModel>({});

    constructor(private _tokenService: TokenService) {
        if (this._tokenService.hasToken()) {
            this.decodeJWT();
        }
    }

    private decodeJWT() {
        const token = this._tokenService.getToken();
        const user = jwtDecode(token) as UserModel;

        this.userSubject.next(user);
    }

    returnUser() {
        return this.userSubject.asObservable();
    }

    saveToken(token: string) {
        this._tokenService.setToken(token);
        this.decodeJWT();
    }

    logout() {
        this._tokenService.destroyToken();
        this.userSubject.next({});
    }

    hasLogged() {
        return this._tokenService.hasToken();
    }
}
