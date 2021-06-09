import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserAuthService } from './user/user-auth.service';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl;

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(
        private _httpClient: HttpClient,
        private _userService: UserAuthService
    ) {}

    //Observable de HttpResponse com o parametro observe retorna não só o body mas o header da requisição tb
    auth(user: string, password: string): Observable<any> {
        return this._httpClient
            .post(
                `${apiUrl}/user/login`,
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
