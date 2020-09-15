import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page20',
  templateUrl: './page20.component.html',
  styleUrls: ['./page20.component.css']
})
export class Page20Component implements OnInit {
flag;
flag2="-";
  time="-";
  note="-"
  buttonDisabled:boolean=false;
  constructor(private scoresService: ScoresService, private router: Router) { }

  setScore20(flag){
    this.scoresService.setScore20(flag)
    this.scoresService.setDevice3(this.flag2)
    this.scoresService.settime14(this.time)
    this.scoresService.setnote20(this.note)
      this.scoresService.Up1();
    
      if (this.flag==1){
        this.scoresService.Reset0()
       
     }
      if (this.scoresService.GetCounter()==3){
        window.alert('Three Consecutive Zeros! Ending Test.');
        this.router.navigate(['/results']);
      }
      else{
        this.router.navigate(['/page21']);
      }
    
  }
  OnInput (event:any){
      this.time = event.target.value;
      
    }
  OnInput2 (event:any){
      this.note = event.target.value;
      
    }
  ngOnInit() {
  
this.flag=this.scoresService.getScore20()
this.flag2=this.scoresService.getDevice3()

  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}