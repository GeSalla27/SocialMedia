import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/auth/token.service';
import { Posts } from 'src/app/models/post';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl;

@Injectable({
    providedIn: 'root',
})
export class PostService {
    constructor(
        private _httpClient: HttpClient,
        private _tokenService: TokenService
    ) {}

    userList(userName: string): Observable<Posts> {
        const token = this._tokenService.getToken();
        const headers = new HttpHeaders().append('x-acess-token', token);
        return this._httpClient.get<Posts>(`${apiUrl}/${userName}/photos`, {
            headers,
        });
    }
}
