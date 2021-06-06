import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/auth/user/user-auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
    constructor(
        private _userAuthService: UserAuthService,
        private _router: Router
    ) {}
    public userAuth$ = this._userAuthService.returnUser();

    logout() {
        this._userAuthService.logout();
        this._router.navigateByUrl('');
    }
}
