import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { FlexboxW3SchoolsComponent } from './flexbox-w3-schools/flexbox-w3-schools.component';
import { WeatherReportFlexboxComponent } from './weather-report-flexbox/weather-report-flexbox.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    FlexboxW3SchoolsComponent,
    WeatherReportFlexboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'hr-HR',
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }