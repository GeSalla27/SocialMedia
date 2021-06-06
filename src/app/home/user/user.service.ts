import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { UserModal } from 'src/app/model/user';
import { GlobalsService } from 'src/app/utils/globals.service';
import { first, map, switchMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(
        private _httpClient: HttpClient,
        private _globals: GlobalsService
    ) {}

    signUp(user: UserModal) {
        return this._httpClient.post(
            this._globals.urlApiUser + '/user/signup/',
            user
        );
    }

    hasUser(name: string) {
        return this._httpClient.get(
            this._globals.urlApiUser + `/user/exists/${name}`
        );
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
