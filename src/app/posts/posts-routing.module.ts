import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostNewComponent } from './post-new/post-new.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsListResolver } from './posts-list/posts-list.resolver';

const routes: Routes = [
    {
        path: '',
        component: PostsListComponent,
        resolve: {
            posts: PostsListResolver,
        },
    },
    {
        path: 'new',
        component: PostNewComponent,
    },
    {
        path: ':postId',
        component: PostDetailComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PostsRoutingModule {}
