import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posts } from 'src/app/models/post';

@Component({
    selector: 'app-posts-list',
    templateUrl: './posts-list.component.html',
    styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
    posts!: Posts;

    constructor(private _activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        this._activatedRoute.params.subscribe((param) => {
            this.posts = this._activatedRoute.snapshot.data['posts'];
        });
    }
}
