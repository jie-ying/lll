import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
 template:`<button class="like-button" (click)="clickLike()" [class.liked]="choseLike === true"> Like | <span class="like-button">{{ likes }}</span></button>
  <button class="dislike-button" (click)="clickDislike()"> Dislike | <span class="like-button">
  {{ dislikes }}</span></button>`,
  styles: [`
    .like-button .dislike-button
    {
      font-size: 1rem;
      padding: 5px 10px;
      color: #585858
    }
    
    .liked .disliked 
    {
      font-weight: bold;
      color: #1565c0;
    }
  `]
  
})
export class AppComponent {
  title = 'like';
  likes = 25;
  dislikes = 100;
  
  choseLike: boolean = false;
  hasLiked: boolean = false;

  clickLike(){
    if(!this.choseLike){
      this.choseLike = true;
      this.hasLiked = true;
      this.likes++;
    }
    else if(!this.hasLiked){
      this.hasLiked = true;
      this.likes++;
      this.dislikes--;
    }
    else{
      this.choseLike = false;
      this.hasLiked = false;
      this.likes--;
    }
    
  }

  clickDislike() {
    if(!this.choseLike){
      this.choseLike = true;
      this.hasLiked = false;
      this.dislikes++;
    }
    else if(this.hasLiked){
      this.hasLiked = false;
      this.likes--;
      this.dislikes++;
    }
    else{
      this.choseLike = false;
      this.hasLiked = false;
      this.dislikes--;
    }
    

  }
}
