import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
time: number = 0;
  minutes:number=  0;
  seconds:number= 0;
  play:boolean=false;
  
interval;


start() {
  if (this.play==false){
  this.play = true;
  this.interval = setInterval(() => {
    this.time++;
    
        this.minutes = Math.floor(this.time / 60);
        
        this.seconds = this.time-(this.minutes * 60)
        
        /** 
        if (Number(this.minutes) < 10) {
          this.minutes = '0' + this.minutes;
        } else {
          this.minutes = '' + this.minutes;
        }
        if (Number(this.seconds) < 10) {
          this.seconds = '0' + this.seconds;
        } else {
          this.seconds = '' + this.seconds;
        }*/
        
  },1000)
  }
}

stop() {
  this.play = false;
  clearInterval(this.interval);
}
reset(){
  this.play=false;
  clearInterval(this.interval);
  this.time=0;
  this.seconds=0;
  this.minutes=0;
}
}