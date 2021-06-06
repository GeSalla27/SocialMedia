import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    public user: string = '';
    public password: string = '';

    constructor(private _authService: AuthService, private _router: Router) {}

    ngOnInit(): void {}

    login() {
        if (!this.login || !this.password) {
            alert('Campos obrigatórios não informados!');
            return;
        } else {
            this._authService.auth(this.user, this.password).subscribe(
                () => {
                    console.log('Autenticado com sucesso');
                    this._router.navigateByUrl('posts');
                },
                (error) => {
                    alert('Usuário ou senha inválido!');
                }
            );
        }
    }
}
