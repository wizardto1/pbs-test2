import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
@Component({
  selector: 'app-page13',
  templateUrl: './page13.component.html',
  styleUrls: ['./page13.component.css']
})
export class Page13Component implements OnInit {
flag;
  time;
  note="-";
  buttonDisabled:boolean=false;
  constructor(private scoresService: ScoresService) { }

  setScore13(flag){
    this.scoresService.setScore13(flag)
    this.scoresService.setButton13(this.buttonDisabled)
    this.scoresService.setnote13(this.note)
  }
  OnInput2 (event:any){
      this.note = event.target.value;
      
    }
  ngOnInit() {
  
this.flag=this.scoresService.getScore13()
this.buttonDisabled=this.scoresService.getButton13()
  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}