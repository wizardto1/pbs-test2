import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page15',
  templateUrl: './page15.component.html',
  styleUrls: ['./page15.component.css']
})
export class Page15Component implements OnInit {
flag;
note="-";
  time="-";
  flag2;
  buttonDisabled:boolean=false;
   constructor(private scoresService: ScoresService, private router: Router) { }

  setScore15(flag){
    this.scoresService.setScore15(flag)
    this.scoresService.setnote15(this.note)
    this.scoresService.settime11(this.time)
      this.scoresService.Up1();
    
      if (this.flag==1){
        this.scoresService.Reset0()
       
     }
      if (this.scoresService.GetCounter()==3){
        window.alert('Three Consecutive Zeros! Ending Test.');
        this.router.navigate(['/results']);
      }
      else{
        this.router.navigate(['/page16']);
      }
    
  }
  OnInput (event:any){
      this.time = event.target.value;
      
    }
  OnInput2 (event:any){
      this.note = event.target.value;
      
    }
  ngOnInit() {
  
this.flag=this.scoresService.getScore15()

  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}