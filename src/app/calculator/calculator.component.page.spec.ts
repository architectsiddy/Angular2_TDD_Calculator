import {ComponentFixture} from "@angular/core/testing";
import {By} from "@angular/platform-browser";
import {CalculatorComponent} from "./calculator.component";

export class CalculatorComponentPage {

  mainTitle:any;
  constructor(public fixture:ComponentFixture<CalculatorComponent>) {
  }

  addPageElements() {
    this.mainTitle = this.fixture.debugElement.query(By.css('.mainTitle')).nativeElement;
  }

}
