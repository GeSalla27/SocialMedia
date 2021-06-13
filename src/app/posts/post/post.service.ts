import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, mapTo } from 'rxjs/operators';
import { TokenService } from 'src/app/auth/token.service';
import { PostModel, Posts } from 'src/app/models/post';
import { environment } from 'src/environments/environment';

const APIURL = environment.apiUrl;
const notModified = '304';

@Injectable({
    providedIn: 'root',
})
export class PostService {
    constructor(private _httpClient: HttpClient) {}

    userList(userName: string): Observable<Posts> {
        return this._httpClient.get<Posts>(`${APIURL}/${userName}/photos`);
    }

    getPostById(id: number): Observable<PostModel> {
        return this._httpClient.get<PostModel>(`${APIURL}/photos/${id}`);
    }

    deletePost(id: number): Observable<PostModel> {
        return this._httpClient.delete<PostModel>(`${APIURL}/photos/${id}`);
    }

    like(id: number): Observable<boolean> {
        return this._httpClient
            .post(`${APIURL}/photos/${id}/like`, {}, { observe: 'response' })
            .pipe(
                mapTo(true),
                catchError((error) => {
                    return error.status == notModified
                        ? of(false)
                        : throwError(error);
                })
            );
    }

    upload(description: string, allowComment: boolean, file: File) {
        const formData = new FormData();
        formData.append('description', description);
        formData.append('allowComments', allowComment ? 'true' : 'false');
        formData.append('imageFile', file);

        return this._httpClient.post(`${APIURL}/photos/upload`, formData, {
            observe: 'events',
            reportProgress: true,
        });
    }
}
