import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/auth/user/user-auth.service';
import { Posts } from 'src/app/models/post';
import { PostService } from '../post/post.service';

@Component({
    selector: 'app-posts-list',
    templateUrl: './posts-list.component.html',
    styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
    posts!: Posts;

    constructor(
        private _userAuthService: UserAuthService,
        private _postService: PostService
    ) {}

    ngOnInit(): void {
        this._userAuthService.returnUser().subscribe((user) => {
            const userName = user.name ?? '';
            this._postService.userList(userName).subscribe((posts) => {
                this.posts = posts;
            });
        });
    }
}
