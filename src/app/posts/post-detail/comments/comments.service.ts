import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentModel, Comments } from 'src/app/models/coment';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl;

@Injectable({
    providedIn: 'root',
})
export class CommentsService {
    constructor(private _httpClient: HttpClient) {}

    getComments(id: number): Observable<Comments> {
        return this._httpClient.get<Comments>(
            `${apiUrl}/photos/${id}/comments`
        );
    }

    addComent(id: number, commentText: string): Observable<CommentModel> {
        return this._httpClient.post<CommentModel>(
            `${apiUrl}/photos/${id}/comments`,
            { commentText }
        );
    }
}
