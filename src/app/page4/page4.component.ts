import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css']
})
export class Page4Component implements OnInit {
flag;
  time="-";
  note="-"
  flag2;
  buttonDisabled:boolean=false;
  constructor(private scoresService: ScoresService) { }

  setScore4(flag){
    this.scoresService.setScore4(flag)
    this.scoresService.setButton4(this.buttonDisabled)
     this.scoresService.set4Value(flag)
     this.scoresService.setnote4(this.note)
     this.scoresService.settime3(this.time)
  }
  OnInput (event:any){
      this.time = event.target.value;
      
    }
  OnInput2 (event:any){
      this.note = event.target.value;
      
    }
  
  ngOnInit() {
  
this.flag=this.scoresService.getScore4();
this.buttonDisabled=this.scoresService.getButton4()
  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}