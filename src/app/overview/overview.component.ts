import { Component, Injectable, Inject } from '@angular/core';
import location from '../utils/loc';
import jsonp from '../utils/jsonp';
import WeatherService from '../utils/weather-service';


@Component({
  selector: 'main-container',
  providers: [WeatherService],
  template: `
    <div class="main-container">
      <app-bar></app-bar>
      <main class="main">
        Datum:{{wS.temprature}}
        Koordinaten:

      </main>
    </div>
  `,
  styles: []
})

export class OverviewComponent {

  constructor(public wS: WeatherService) {
      wS.getData();
  }
}
