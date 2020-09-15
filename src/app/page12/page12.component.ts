import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page12',
  templateUrl: './page12.component.html',
  styleUrls: ['./page12.component.css']
})
export class Page12Component implements OnInit {
flag;
  time="-";
  note="-"
  buttonDisabled:boolean=false;
  constructor(private scoresService: ScoresService, private router: Router) { }

  setScore12(flag){
    this.scoresService.setScore12(flag)
    this.scoresService.setButton12(this.buttonDisabled)
    this.scoresService.setnote12(this.note)
    this.scoresService.settime9(this.time)
      this.scoresService.Up1();
    
      if (this.flag==1){
        this.scoresService.Reset0()
       
     }
      if (this.scoresService.GetCounter()==3){
        window.alert('Three Consecutive Zeros! Ending Test.');
        this.router.navigate(['/results']);
      }
      else{
        this.router.navigate(['/page13']);
      }
  }
  OnInput (event:any){
      this.note = event.target.value;
      
    }
  OnInput2 (event:any){
      this.note = event.target.value;
      
    }
  ngOnInit() {
  
this.flag=this.scoresService.getScore12()
this.buttonDisabled=this.scoresService.getButton12()
  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}