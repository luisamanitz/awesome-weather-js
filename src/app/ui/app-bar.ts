import { Component } from '@angular/core';
import WeatherService from '../utils/weather-service';


@Component({
  selector: 'app-bar',
  template: `
    <header class="app-bar row middle-xs">
      <span class="logo col-xs-10">
        Awesome Weather
      </span>
      <div class="col-xs-2">
        <div class="row middle-xs between-xs">
          <span class="data">Dein Standort: {{wS.coordLat}},{{wS.coordLon}}</span>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .app-bar {
      padding: 5px 30px;
      background-color: #00BCD4;
    }
    .logo {
      color: white;
      font-size: 28px;
      line-height: 1.3em;
      font-weight: 300;
      cursor: pointer;
    }
    .data {
      color: white;
      font-size: 12px;
      line-height: 1.3em;
      font-weight: 400;
      cursor: pointer;
    }
    `]
})

export class AppBar {

    constructor(public wS: WeatherService) {
        wS.getData();
    }
}
