import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
@Component({
  selector: 'app-page6',
  templateUrl: './page6.component.html',
  styleUrls: ['./page6.component.css']
})
export class Page6Component implements OnInit {
flag;
flag2="-";
  time="-";
  note="-";
  buttonDisabled:boolean=false;
  constructor(private scoresService: ScoresService) { }

  setScore6(flag){
    this.scoresService.setScore6(flag)
    this.scoresService.setButton6(this.buttonDisabled)
     this.scoresService.set6Value(flag)
     this.scoresService.setnote6(this.note)
     this.scoresService.setLeg3(this.flag2)
     this.scoresService.settime4(this.time)
  }
  OnInput (event:any){
      this.time = event.target.value;
      
    }
  OnInput2 (event:any){
      this.note = event.target.value;
      
    }
    OnInput3 (event:any){
      this.flag2 = event.target.value;
      console.log(this.flag2)
    }
  ngOnInit() {
  
this.flag=this.scoresService.getScore6();
this.buttonDisabled=this.scoresService.getButton6()
  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}