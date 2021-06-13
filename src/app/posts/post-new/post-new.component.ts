import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { PostService } from '../post/post.service';

@Component({
    selector: 'app-post-new',
    templateUrl: './post-new.component.html',
    styleUrls: ['./post-new.component.css'],
})
export class PostNewComponent implements OnInit {
    formPost!: FormGroup;
    file!: File;
    preview!: string;
    percentageConcluded = 0;

    constructor(
        private _postService: PostService,
        private _formBuilder: FormBuilder,
        private _router: Router
    ) {}

    ngOnInit(): void {
        this.formPost = this._formBuilder.group({
            file: ['', Validators.required],
            description: ['', Validators.maxLength(300)],
            allowComments: [true],
        });
    }

    upload() {
        const allowComments =
            this.formPost.get('allowComments')?.value ?? false;
        const description = this.formPost.get('description')?.value ?? '';

        this._postService
            .upload(description, allowComments, this.file)
            .pipe(finalize(() => this._router.navigate(['posts'])))
            .subscribe(
                (event: HttpEvent<any>) => {
                    if (event.type === HttpEventType.UploadProgress) {
                        const total = event.total ?? 1;
                        this.percentageConcluded = Math.round(
                            100 * (event.loaded / total)
                        );
                    }
                },
                (error) => console.log(error)
            );
    }

    saveFile(arquivo: any): void {
        const [file] = arquivo?.files;
        this.file = file;
        const reader = new FileReader();
        reader.onload = (event: any) => (this.preview = event.target.result);
        reader.readAsDataURL(file);
    }
}
