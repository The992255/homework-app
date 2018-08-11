import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { print } from 'util';
import { interval } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() putScore = new EventEmitter<{score: number}>();
  playOrNot=true;
  nowPlay;
  i = 0;

  constructor() { }

  ngOnInit() { 
  }

  play() {   
    if(this.playOrNot){
      this.playOrNot = false;
      this.nowPlay = setInterval(this.playing, 1000);
    }
    else{
      this.playOrNot = true;
      clearInterval(this.nowPlay);
    }
  }

  playing = () => {
    this.i++;
    console.log(this.i);
    this.putScore.emit({
      score: this.i
    })
  }
}
