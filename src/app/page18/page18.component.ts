import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
@Component({
  selector: 'app-page18',
  templateUrl: './page18.component.html',
  styleUrls: ['./page18.component.css']
})
export class Page18Component implements OnInit {
flag;
  time;
  buttonDisabled:boolean=false;
  flag2="-";
  note="-";
  constructor(private scoresService: ScoresService) { }

  setScore18(flag){
    this.scoresService.setScore18(flag)
    this.scoresService.setLeg6(this.flag2)
    this.scoresService.setnote18(this.note)
    
  }
  OnInput2 (event:any){
      this.note = event.target.value;
      
    }
  ngOnInit() {
  
this.flag=this.scoresService.getScore18()
this.flag2=this.scoresService.getLeg6()

  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}