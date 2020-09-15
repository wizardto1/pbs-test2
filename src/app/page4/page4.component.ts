import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css']
})
export class Page4Component implements OnInit {
flag;
  time="-";
  note="-"
  flag2;
  router
  buttonDisabled:boolean=false;
  constructor(private scoresService: ScoresService, private router: Router) { }

  setScore4(flag){
    this.scoresService.setScore4(flag)
    this.scoresService.setButton4(this.buttonDisabled)
     
     this.scoresService.setnote4(this.note)
     this.scoresService.settime3(this.time)
      this.scoresService.Up1();
      if (this.scoresService.GetCounter()==3){
        this.router.navigate(['/results']);
      }
      else{
        this.router.navigate(['/page5']);
      }
  }
  OnInput (event:any){
      this.time = event.target.value;
      
    }
  OnInput2 (event:any){
      this.note = event.target.value;
      
    }
  
  ngOnInit() {
  
this.flag=this.scoresService.getScore4();
this.buttonDisabled=this.scoresService.getButton4()
  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}