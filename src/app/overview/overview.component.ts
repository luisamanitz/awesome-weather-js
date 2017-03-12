import { Component, OnInit } from '@angular/core';
import location from '../utils/loc';
import error from '../utils/loc';

@Component({
  selector: 'main-container',
  template: `
    <div class="main-container">
      <app-bar></app-bar>
      <main class="main">
        main-content
      </main>
    </div>
  `,
  styles: []
})

export class OverviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // API-Call: json
    navigator.geolocation.getCurrentPosition(location, error);
    //console.log('overview-location: ' + location);

    // Convert Timestamp

    // Convert Temprature

    // Show Weather-Icon

    // Show Forecast Today (extended)

    // Show Forecast Next Days (icon, temprature, )
  }

}
