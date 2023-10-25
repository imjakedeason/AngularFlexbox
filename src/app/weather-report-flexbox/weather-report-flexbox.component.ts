import { Component, NgZone} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeHr from '@angular/common/locales/hr';

registerLocaleData(localeHr);

@Component({
  selector: 'app-weather-report-flexbox',
  templateUrl: './weather-report-flexbox.component.html',
  styleUrls: ['./weather-report-flexbox.component.scss']
})
export class WeatherReportFlexboxComponent {
  currentTime: Date;

  constructor(private zone: NgZone) {
    this.currentTime = new Date();
  }

  ngOnInit() {
    setInterval(() => {
      this.zone.run(() => {
        this.currentTime = new Date();
      });
    }, 1000);
  }
}
