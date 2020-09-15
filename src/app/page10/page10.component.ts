import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page10',
  templateUrl: './page10.component.html',
  styleUrls: ['./page10.component.css']
})
export class Page10Component implements OnInit {
 flag;
 note="-";
  time="-";
  buttonDisabled:boolean=false;
    constructor(private scoresService: ScoresService, private router: Router) { }

  setScore10(flag){
    this.scoresService.setScore10(flag)
    this.scoresService.setButton10(this.buttonDisabled)
    
    this.scoresService.setnote10(this.note)
    this.scoresService.settime8(this.time)
      this.scoresService.Up1();
    
      if (this.flag==1){
        this.scoresService.Reset0()
       
     }
      if (this.scoresService.GetCounter()==3){
        window.alert('Three Consecutive Zeros! Ending Test.');
        this.router.navigate(['/results']);
      }
      else{
        this.router.navigate(['/page11']);
      }
  }
  OnInput (event:any){
      this.time = event.target.value;
      
    }
    OnInput2 (event:any){
      this.note = event.target.value;
      
    }
  ngOnInit() {
  
this.flag=this.scoresService.getScore10()
this.buttonDisabled=this.scoresService.getButton10()
  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}