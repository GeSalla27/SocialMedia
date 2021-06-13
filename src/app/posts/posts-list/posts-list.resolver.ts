import { Injectable } from '@angular/core';
import {
    Router,
    Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { UserAuthService } from 'src/app/auth/user/user-auth.service';
import { Posts } from 'src/app/models/post';
import { PostService } from '../post/post.service';

@Injectable({
    providedIn: 'root',
})
export class PostsListResolver implements Resolve<Posts> {
    constructor(
        private _postService: PostService,
        private _userAuthService: UserAuthService
    ) {}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Posts> {
        return this._userAuthService.returnUser().pipe(
            switchMap((user) => {
                const userName = user.name ?? '';
                return this._postService.userList(userName);
            }),
            take(1)
        );
    }
}
