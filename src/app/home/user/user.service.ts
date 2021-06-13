import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs/operators';
import { UserModel } from 'src/app/models/user';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl;

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private _httpClient: HttpClient) {}

    signUp(user: UserModel) {
        return this._httpClient.post(`${apiUrl}/user/signup/`, user);
    }

    hasUser(name: string) {
        return this._httpClient.get(`${apiUrl}/user/exists/${name}`);
    }

    validateFormHasUser() {
        return (control: AbstractControl) => {
            return control.valueChanges.pipe(
                switchMap((userName) => this.hasUser(userName)),
                map((hasUser) => (hasUser ? { hasUser: true } : null)),
                first()
            );
        };
    }
}
