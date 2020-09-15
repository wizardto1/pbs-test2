import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
@Component({
  selector: 'app-page16',
  templateUrl: './page16.component.html',
  styleUrls: ['./page16.component.css']
})
export class Page16Component implements OnInit {
flag;
note="-";
  time="-";
  buttonDisabled:boolean=false;
  constructor(private scoresService: ScoresService) { }

  setScore16(flag){
    this.scoresService.setScore16(flag)
    this.scoresService.setnote16(this.note)
    this.scoresService.settime12(this.time)
    
  }
  OnInput(event:any){
      this.time = event.target.value;
      
    }
  OnInput2 (event:any){
      this.note = event.target.value;
      
    }
  ngOnInit() {
  
this.flag=this.scoresService.getScore16()

  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}