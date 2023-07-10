import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.http.post('https://angular-course-5edec-default-rtdb.firebaseio.com/posts.json', postData)
      .subscribe(res => {
        console.log(res);
      });
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.http.get('https://angular-course-5edec-default-rtdb.firebaseio.com/posts.json')
      .pipe(map(res => {
        const postsArray = [];
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            postsArray.push({ ...res[key], id: key });
          }
        }
        return postsArray;
      }))
      .subscribe(posts => {
        console.log(posts);
      });
  }
}
