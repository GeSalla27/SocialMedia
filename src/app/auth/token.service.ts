import { Injectable } from '@angular/core';

const _KEY = 'token';

@Injectable({
    providedIn: 'root',
})
export class TokenService {
    getToken() {
        return localStorage.getItem(_KEY) ?? '';
    }

    setToken(token: string) {
        localStorage.setItem(_KEY, token);
    }

    destroyToken() {
        localStorage.removeItem(_KEY);
    }

    hasToken() {
        return !!this.getToken();
    }
}
