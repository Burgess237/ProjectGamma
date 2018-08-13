import { DataService } from './../data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  providers: [ ]
})
export class StartComponent {
  MathValues: any = {
  First: 1,
  Second: 1,
  CalcAnswer: 1,
  UserAnswer: 1,
  Operand: '+'
  };

  Operands  =  ['/', '*', '+', '-'];
  Calccheck: boolean;

  constructor(private data: DataService) {
  }

  Calculate(): void {

    this.data.setFirst(this.MathValues.First);
    this.data.setSecond(this.MathValues.Second);
    this.data.setAnswer(this.MathValues.UserAnswer);

    if (this.MathValues.Operand === '+') {
      // this.MathValues.CalcAnswer = 100;
      this.MathValues.CalcAnswer = parseInt(this.MathValues.First, 10) + parseInt(this.MathValues.Second, 10);
      this.check();
    }
    if (this.MathValues.Operand === '-') {
      this.MathValues.CalcAnswer = this.MathValues.First - this.MathValues.Second;
      this.check();
    }
    if (this.MathValues.Operand === '/') {
      this.MathValues.CalcAnswer = this.MathValues.First / this.MathValues.Second;
      this.check();
    }
    if (this.MathValues.Operand === '*') {
      this.MathValues.CalcAnswer = this.MathValues.First * this.MathValues.Second;
      this.check();
    }
  }

  check(): boolean {
    if (this.MathValues.UserAnswer === this.MathValues.CalcAnswer) {
      // make the login button active
      this.Calccheck = true;
      // this.MathValues.CalcAnswer = 100;
      return true;
    } else {
      this.Calccheck = false;
      // this.MathValues.CalcAnswer = 100;
      return false;
    }
  }

}
