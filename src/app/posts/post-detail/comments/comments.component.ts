import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Comments } from 'src/app/models/coment';
import { CommentsService } from './comments.service';

@Component({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
    @Input()
    idPost!: number;
    comments$!: Observable<Comments>;
    commentForm!: FormGroup;

    constructor(
        private _commentService: CommentsService,
        private _formBuilder: FormBuilder
    ) {}

    ngOnInit(): void {
        this.comments$ = this._commentService.getComments(this.idPost);
        this.commentForm = this._formBuilder.group({
            comment: ['', Validators.maxLength(300)],
        });
    }

    save(): void {
        const comment = this.commentForm.get('comment')?.value ?? '';
        this.comments$ = this._commentService
            .addComent(this.idPost, comment)
            .pipe(
                switchMap(() => this._commentService.getComments(this.idPost)),
                tap(() => {
                    this.commentForm.reset();
                    alert('Comentários Salvo!');
                })
            );
    }
}
