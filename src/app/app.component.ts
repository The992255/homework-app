import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  look = false;
  say = [];
  myOddScores = [];
  myEvenScores = [];

  lookSay() {
    var heSay = Math.random() > 0.5 ? '...貴安' : '貴安?';
    this.look =  !this.look;
    if(this.say.length > 5){
      this.say.push("貴樣!"+ new Date());
    }
    else{
      this.say.push(heSay + new Date());
    }
  }

  addScore(score: {score: number}) {
    if(score.score%2!=0){
      this.myOddScores.push({
        score: score.score
      });
    }
    else{
      this.myEvenScores.push({
        score: score.score
      });
    }
  }
}
