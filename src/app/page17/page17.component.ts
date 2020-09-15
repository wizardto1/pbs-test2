import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page17',
  templateUrl: './page17.component.html',
  styleUrls: ['./page17.component.css']
})
export class Page17Component implements OnInit {
flag;
  time;
  note="-";
  buttonDisabled:boolean=false;
  constructor(private scoresService: ScoresService, private router: Router) { }

  setScore17(flag){
    this.scoresService.setScore17(flag)
    this.scoresService.setnote17(this.note)
    
  }
  OnInput2 (event:any){
      this.note = event.target.value;
      
    }
  ngOnInit() {
  
this.flag=this.scoresService.getScore17()

  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}