import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherReportFlexboxComponent } from './weather-report-flexbox.component';

describe('WeatherReportFlexboxComponent', () => {
  let component: WeatherReportFlexboxComponent;
  let fixture: ComponentFixture<WeatherReportFlexboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherReportFlexboxComponent]
    });
    fixture = TestBed.createComponent(WeatherReportFlexboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});