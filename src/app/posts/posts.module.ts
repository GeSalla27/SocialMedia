import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsListComponent } from './posts-list/posts-list.component';
import { CardModule } from '../components/card/card.module';
import { NotePhotosComponent } from './note-photos/note-photos.component';
import { PostComponent } from './post/post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { CommentsComponent } from './post-detail/comments/comments.component';
import { MessageModule } from '../components/message/message.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PostNewComponent } from './post-new/post-new.component';

@NgModule({
    declarations: [
        PostsListComponent,
        NotePhotosComponent,
        PostComponent,
        PostDetailComponent,
        CommentsComponent,
        PostNewComponent,
    ],
    imports: [CommonModule, PostsRoutingModule, CardModule, SharedModule],
})
export class PostsModule {}
