import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
qs=0;
  so=0;
  apa=0;
  pr=0;
  sg=0;
  to=0;
  total=0;
  score1=0;
  score2="skip";
  score3=0;
  score4="skip";
  score5="skip";
  score6="skip";
  score7="skip";
  score8="skip";
  score9="skip";
  score10="skip";
  score11="skip";
  score12=0;
  score13=0;
  score14=0;
  score15=0;
  score16=0;
  score17=0;
  score18=0;
  score19=0;
  score20=0;
  score21=0;
  score22=0;
  time1="-";
  time2="-";
  time3="-";
  time4="-";
  time5="-";
  time6="-";
  time7="-";
  time8="-";
  time9="-";
  time10="-";
  time11="-";
  time12="-";
  time13="-";
  time14="-";
  time15="-"
  leg1="-";
  leg2="-";
  leg3="-";
  leg4="-";
  leg5="-";
  leg6="-";
  leg7="-";
  leg8="-"
  device1="-";
  device2="-";
  device3="-";
  note1="-";
  note2="-";
  note3="-";
  note4="-";
  note5="-";
  note6="-";
  note7="-";
note8="-";
note9="-";
  note10="-";
  note11="-";
  note12="-";
  note13="-";
  note14="-";
  note15="-";
  note16="-";
  note17="-";
  note18="-";
  note19="-";
  note20="-";
  note21="-";
  note22="-";
  
  constructor(private scoresService: ScoresService, private timeService:TimeService){ }
  reset(){
    this.scoresService.reset();
    this.timeService.returnTime();
  }
  ngOnInit() {
    this.total=this.scoresService.gettotal();
    this.qs=this.scoresService.getqs();
    this.so=this.scoresService.getso();
    this.apa=this.scoresService.getapa();
    this.pr=this.scoresService.getpr();
    this.sg=this.scoresService.getsg();
    this.score1=this.scoresService.getScore1();
    this.score2=this.scoresService.getScore2();
    this.score3=this.scoresService.getScore3();
    this.score4=this.scoresService.getScore4();
    this.score5=this.scoresService.getScore5();
    this.score6=this.scoresService.getScore6();
    this.score7=this.scoresService.getScore7();
    this.score8=this.scoresService.getScore8();
    this.score9=this.scoresService.getScore9();
    this.score10=this.scoresService.getScore10();
    this.score11=this.scoresService.getScore11();
    this.score12=this.scoresService.getScore12();
    this.score13=this.scoresService.getScore13();
    this.score14=this.scoresService.getScore14();
    this.score15=this.scoresService.getScore15();
    this.score16=this.scoresService.getScore16();
    this.score17=this.scoresService.getScore17();
    this.score18=this.scoresService.getScore18();
    this.score19=this.scoresService.getScore19();
    this.score20=this.scoresService.getScore20();
    this.score21=this.scoresService.getScore21();
    this.score22=this.scoresService.getScore22();
    this.device1=this.scoresService.getDevice1();
    this.device2=this.scoresService.getDevice2();
    this.device3=this.scoresService.getDevice3();
    this.leg1=this.scoresService.getLeg1();
    this.leg2=this.scoresService.getLeg2();
    this.leg3=this.scoresService.getLeg3();
    this.leg4=this.scoresService.getLeg4();
    this.leg5=this.scoresService.getLeg5();
    this.leg6=this.scoresService.getLeg6();
    this.leg7=this.scoresService.getLeg7();
      this.leg8=this.scoresService.getLeg8();
      this.note1=this.scoresService.getnote1();
      this.note2=this.scoresService.getnote2();
      this.note3=this.scoresService.getnote3();
      this.note4=this.scoresService.getnote4();
      this.note5=this.scoresService.getnote5();
      this.note6=this.scoresService.getnote6();
      this.note7=this.scoresService.getnote7();
      this.note8=this.scoresService.getnote8();
      this.note9=this.scoresService.getnote9();
      this.note10=this.scoresService.getnote10();
      this.note11=this.scoresService.getnote11();
      this.note12=this.scoresService.getnote12();
      this.note13=this.scoresService.getnote13();
      this.note14=this.scoresService.getnote14();
      this.note15=this.scoresService.getnote15();
      this.note16=this.scoresService.getnote16();
      this.note17=this.scoresService.getnote17();
      this.note18=this.scoresService.getnote18();
      this.note19=this.scoresService.getnote19();
      this.note20=this.scoresService.getnote20();
      this.note21=this.scoresService.getnote21();
      this.note22=this.scoresService.getnote22();
      this.time1=this.scoresService.gettime1();
      this.time2=this.scoresService.gettime2();
      this.time3=this.scoresService.gettime3();
      this.time4=this.scoresService.gettime4();
      this.time5=this.scoresService.gettime5();
      this.time6=this.scoresService.gettime6();
      this.time7=this.scoresService.gettime7();
      this.time8=this.scoresService.gettime8();
      this.time9=this.scoresService.gettime9();
      this.time10=this.scoresService.gettime10();
      this.time11=this.scoresService.gettime11();
      this.time12=this.scoresService.gettime12();
      this.time13=this.scoresService.gettime13();
      this.time14=this.scoresService.gettime14();
      this.time15=this.scoresService.gettime15();

  }

}