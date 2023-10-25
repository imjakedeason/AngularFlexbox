import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  public number1: number = 0;
  public number2: number = 0;
  public result: number = 0;

  public add(){
      this.result=this.number1+this.number2
  }
}