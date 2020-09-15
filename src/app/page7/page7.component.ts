import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
@Component({
  selector: 'app-page7',
  templateUrl: './page7.component.html',
  styleUrls: ['./page7.component.css']
})
export class Page7Component implements OnInit {
flag;
flag2="-";
  time="-";
  note="-"
  buttonDisabled:boolean=false;
  constructor(private scoresService: ScoresService) { }

  setScore7(flag){
    this.scoresService.setScore7(flag)
    this.scoresService.setButton7(this.buttonDisabled)
     this.scoresService.set7Value(flag)
     this.scoresService.setnote7(this.note)
     this.scoresService.setLeg4(this.flag2)
     this.scoresService.settime5(this.time)

  }
  OnInput (event:any){
      this.time = event.target.value;
      
    }
    OnInput2 (event:any){
      this.note = event.target.value;
      
    }
    OnInput3 (event:any){
      this.flag2 = event.target.value;
      
    }
  ngOnInit() {
  
this.flag=this.scoresService.getScore7();
this.buttonDisabled=this.scoresService.getButton7()
  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}