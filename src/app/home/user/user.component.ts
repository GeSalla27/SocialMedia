import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user';
import {
    fieldTinyValidator,
    userPasswordValidator,
} from 'src/app/utils/functions';
import { UserService } from './user.service';

@Component({
    selector: 'app-new-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
})
export class User implements OnInit {
    public newUserForm!: FormGroup;

    public email: string = '';
    public name: string = '';
    public user: string = '';
    public password: string = '';

    constructor(
        private _formBuilder: FormBuilder,
        private _userService: UserService,
        private _router: Router
    ) {}

    ngOnInit(): void {
        this.newUserForm = this._formBuilder.group(
            {
                email: ['', [Validators.required, Validators.email]],
                name: ['', [Validators.required, Validators.minLength(4)]],
                user: [
                    '',
                    [Validators.required, fieldTinyValidator],
                    [this._userService.validateFormHasUser()],
                ],
                password: ['', [Validators.required, Validators.minLength(4)]],
            },
            { validators: [userPasswordValidator] }
        );
    }

    registerUser() {
        //Valida se o form esta valido
        if (this.newUserForm.valid) {
            //Pega um json do form e transforma no obj usuario
            const newUser = this.newUserForm.getRawValue() as UserModel;

            this._userService.signUp(newUser).subscribe(
                () => {
                    this._router.navigateByUrl('');
                },
                (error) => {
                    console.log(error);
                }
            );
        } else {
            alert('Formulário Inválido!');
        }
    }
}
