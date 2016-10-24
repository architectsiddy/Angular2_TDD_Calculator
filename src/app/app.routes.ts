import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home.component";
import {CalculatorComponent} from "./calculator/calculator.component";
const routes:Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
  path: 'calculator',
  component: CalculatorComponent
  }
];

export const routing = RouterModule.forRoot(routes);
