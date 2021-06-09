import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsListComponent } from './posts-list/posts-list.component';
import { CardModule } from '../components/card/card.module';
import { NotePhotosComponent } from './note-photos/note-photos.component';
import { PostComponent } from './post/post.component';

@NgModule({
    declarations: [PostsListComponent, NotePhotosComponent, PostComponent],
    imports: [CommonModule, PostsRoutingModule, CardModule],
})
export class PostsModule {}
