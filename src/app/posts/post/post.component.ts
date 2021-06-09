import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl;

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
    private originalUrl = '';

    @Input()
    description = '';

    @Input()
    set url(url: string) {
        if (url.startsWith('data')) {
            this.originalUrl = url;
        } else {
            this.originalUrl = `${apiUrl}/imgs/${url}`;
        }
    }

    get url(): string {
        return this.originalUrl;
    }

    constructor() {}

    ngOnInit(): void {}
}
