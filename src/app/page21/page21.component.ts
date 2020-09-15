import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page21',
  templateUrl: './page21.component.html',
  styleUrls: ['./page21.component.css']
})
export class Page21Component implements OnInit {
flag;
  time="-";
  note="-"
  flag2="-";
  buttonDisabled:boolean=false;
  constructor(private scoresService: ScoresService, private router: Router) { }

  setScore21(flag){
    this.scoresService.setScore21(flag)
    this.scoresService.setLeg8(this.flag2)
    this.scoresService.settime15(this.time) 
    this.scoresService.setnote21(this.note)    
  }
  OnInput (event:any){
      this.time = event.target.value;
      
    }
  OnInput2 (event:any){
      this.note = event.target.value;
      
    }
  ngOnInit() {
  
this.flag=this.scoresService.getScore21()
this.flag2=this.scoresService.getLeg8()

  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}