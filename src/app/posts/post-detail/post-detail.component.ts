import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PostModel } from 'src/app/models/post';
import { PostService } from '../post/post.service';

@Component({
    selector: 'app-post-detail',
    templateUrl: './post-detail.component.html',
    styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
    postId!: number;
    post$!: Observable<PostModel>;

    constructor(
        private _postService: PostService,
        private _activatedRoute: ActivatedRoute,
        private _router: Router
    ) {}

    ngOnInit(): void {
        this.postId = this._activatedRoute.snapshot.params.postId;
        this.post$ = this._postService.getPostById(this.postId);
    }

    likePost() {
        this._postService.like(this.postId).subscribe((like) => {
            if (like) {
                this.post$ = this._postService.getPostById(this.postId);
            }
        });
    }

    deletePost() {
        this._postService.deletePost(this.postId).subscribe(
            () => {
                this._router.navigateByUrl('/posts');
            },
            (error) => console.log(error)
        );
    }
}
