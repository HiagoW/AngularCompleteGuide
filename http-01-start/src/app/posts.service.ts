import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { catchError, map } from "rxjs/operators";
import { Subject, throwError } from "rxjs";

@Injectable({providedIn: 'root'})
export class PostsService {
    error = new Subject<string>();

    constructor(private http: HttpClient) {}

    createAndStorePost(title: string, content: string) {
        const postData: Post = {title, content};
        this.http.post<{name: string}>('https://angular-course-5edec-default-rtdb.firebaseio.com/posts.json', postData)
            .subscribe(res => {
                console.log(res);
            }, error => {
                this.error.next(error.message);
            });
    }

    fetchPosts() {
        return this.http.get<{ [key: string]: Post }>(
                'https://angular-course-5edec-default-rtdb.firebaseio.com/posts.json',
                {
                    // headers: new HttpHeaders({' Custom-Header': 'Hello'}),
                    params: new HttpParams().set('print', 'pretty')
                }
            )
            .pipe(
                map(res => {
                    const postsArray: Post[] = [];
                    for (const key in res) {
                    if (res.hasOwnProperty(key)) {
                        postsArray.push({ ...res[key], id: key });
                    }
                    }
                    return postsArray;
                }),
                catchError(error => {
                    return throwError(error);
                })
            );
    }

    deletePosts() {
        return this.http.delete('https://angular-course-5edec-default-rtdb.firebaseio.com/posts.json');
    }
}