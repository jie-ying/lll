import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.sass'],
  template:`<button (click)="clickLike()" class="likeBtn" [class.like]="state == 1">like | <span> {{likes}}</span></button>
    <button (click)="clickDislike()" class="dislikeBtn" [class.dislike]="state == -1">dislike | <span>{{dislike}}</span></button>`
})
export class AppComponent {
  title = 'like';
  likes = 25;
  dislike = 100;
  state = 0;

  clickLike(): void{
    if(this.state === 0){
      this.state = 1;
      this.likes++;
    }
    else if(this.state === 1){
      this.state = 0;
      this.likes--;
    }
    else if(this.state === -1){
      this.state = 1;
      this.likes++;
      this.dislike--;
    }
  }

  clickDislike(): void{
    if(this.state === 0){
      this.state = -1;
      this.dislike++;
    }
    else if(this.state === 1){
      this.state = -1;
      this.dislike++;
      this.likes--;
    }
    else if(this.state === -1){
      this.state = 0;
      this.dislike--;
    }

  }
}
