import { DataService } from './../data.service';
import { StartComponent } from './../start/start.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers: [ ]
})
export class LandingComponent implements OnInit  {
  constructor(private data: DataService) {
  }
  RandomNumber = (Math.random() * 40000) + 10000;

  @Input() componentReference: StartComponent;

  readonly = false;
  First: any = this.data.getFirst();
  Second: any = this.data.getSecond();
  Answer: any = this.data.getAnswer();
  RandomRating1 = (Math.random() * 6 ) + 3;
  RandomRating2 = (Math.random() * 6 ) + 3;

   ngOnInit() {
   }


}
