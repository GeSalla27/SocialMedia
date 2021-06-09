import { Component, Input, OnInit } from '@angular/core';
import { Posts } from 'src/app/models/post';

@Component({
    selector: 'app-note-photos',
    templateUrl: './note-photos.component.html',
    styleUrls: ['./note-photos.component.css'],
})
export class NotePhotosComponent implements OnInit {
    @Input()
    posts!: Posts;

    constructor() {}

    ngOnInit(): void {}
}
