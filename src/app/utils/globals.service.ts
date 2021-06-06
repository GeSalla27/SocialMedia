import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class GlobalsService {
    urlApiUser: string = 'http://localhost:3000';
}
