import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

export function fieldTinyValidator(control: AbstractControl) {
    const value = control.value as string;
    if (value !== value.toLowerCase()) {
        return { tiny: true };
    } else {
        return null;
    }
}

export function userPasswordValidator(control: AbstractControl) {
    const user = control.get('user')?.value ?? '';
    const password = control.get('password')?.value ?? '';

    if (user.trim() + password.trim()) {
        return user != password ? null : { passwordEqual: true };
    } else return null;
}
