import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
@Component({
  selector: 'app-page22',
  templateUrl: './page22.component.html',
  styleUrls: ['./page22.component.css']
})
export class Page22Component implements OnInit {
flag;
  time;
  note="-";
  buttonDisabled:boolean=false;
 constructor(private scoresService: ScoresService) { }

  setScore22(flag){
    this.scoresService.setScore22(flag)
    this.scoresService.setnote22(this.note)
    
  }
  OnInput (event:any){
      this.note = event.target.value;
      console.log(this.note)
    }
  
  ngOnInit() {
  
this.flag=this.scoresService.getScore22()

  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}