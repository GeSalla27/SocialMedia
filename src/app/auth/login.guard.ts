import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from './user/user-auth.service';

@Injectable({
    providedIn: 'root',
})
export class LoginGuard implements CanLoad {
    constructor(
        private _userService: UserAuthService,
        private _router: Router
    ) {}

    canLoad(
        route: Route,
        segments: UrlSegment[]
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        if (this._userService.hasLogged()) {
            this._router.navigateByUrl('posts');
            return false;
        }
        return true;
    }
}
