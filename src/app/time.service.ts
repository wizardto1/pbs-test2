import { Injectable } from '@angular/core';

@Injectable()
export class TimeService {
  time:any;
  setTime(time){
    this.time=time
    console.log()
  }
  getTime(){
    return this.time
  }
  returnTime(){
    this.time=0
  }
  constructor() { }

}