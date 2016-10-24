import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routing} from "./app.routes";



import { AppComponent } from './app.component';
import {HomeComponent} from "./home.component";
import {CalculatorComponent} from "./calculator/calculator.component";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    CalculatorComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
