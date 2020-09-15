import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
@Component({
  selector: 'app-page5',
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.css']
})
export class Page5Component implements OnInit {
flag;
  time;
  note="-";
  buttonDisabled:boolean=false;
   constructor(private scoresService: ScoresService) { }

  setScore5(flag){
    this.scoresService.setScore5(flag)
    this.scoresService.setButton5(this.buttonDisabled)
    
     this.scoresService.setnote5(this.flag)
  }
  OnInput2 (event:any){
      this.note = event.target.value;
      
    }
  ngOnInit() {
  
this.flag=this.scoresService.getScore5();
this.buttonDisabled=this.scoresService.getButton5()
  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}