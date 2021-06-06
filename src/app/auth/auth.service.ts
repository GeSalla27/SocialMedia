import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalsService } from '../utils/globals.service';
import { map } from 'rxjs/operators';
import { UserAuthService } from './user/user-auth.service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(
        private _httpClient: HttpClient,
        private _globals: GlobalsService,
        private _userService: UserAuthService
    ) {}

    //Observable de HttpResponse com o parametro observe retorna não só o body mas o header da requisição tb
    auth(user: string, password: string): Observable<any> {
        return this._httpClient
            .post(
                this._globals.urlApiUser + '/user/login',
                {
                    userName: user,
                    password: password,
                },
                {
                    observe: 'response',
                }
            )
            .pipe(
                map((res) => {
                    const authToken = res.headers.get('x-access-token') ?? '';
                    this._userService.saveToken(authToken);
                })
            );
    }
}
