import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  yourName = '';
  allowNewName = false;
  allowHaveName = false;
  addName = '';
  i: number = 1;

  constructor() { }

  ngOnInit() {
  }

  onCreatName() {
    if(this.i!=1) {
      this.addName += '<br>';
    }
    this.allowHaveName = true;
    this.addName += 'name' + this.i + ': ' + this.yourName;
    this.i += 1;
    this.yourName = '';
    this.allowNewName = false;
  }

  oppenBtn() {
    if(this.yourName != '') {
      this.allowNewName = true;
    }
    else{
      this.allowNewName = false;
    }
  }

  dellName() {
    this.addName = '';
    this.i = 1;
    this.allowHaveName = false;
  }

}
