import {TestBed, ComponentFixture, async} from "@angular/core/testing";
import {CalculatorComponent} from "./calculator.component";
import {CalculatorComponentPage} from "./calculator.component.page.spec";


describe('Calculator module', ()=> {

  let comp:CalculatorComponent;
  let fixture:ComponentFixture<CalculatorComponent>;
  let page:CalculatorComponentPage;


  beforeEach(async(()=> {
    TestBed.configureTestingModule({
      declarations: [CalculatorComponent],
      imports: []
    }).compileComponents();
    createComponent();
  }));


  function createComponent() {
    fixture = TestBed.createComponent(CalculatorComponent);
    comp = fixture.componentInstance;
    page = new CalculatorComponentPage(fixture);

    fixture.detectChanges();
    return fixture.whenStable().then(() => {
      fixture.detectChanges();
      page.addPageElements();
    });
  }

  it('should display title as \"Calculator\" ', ()=> {
    fixture.detectChanges();
    expect(page.mainTitle.textContent).toContain("Calculator");

  });


});
