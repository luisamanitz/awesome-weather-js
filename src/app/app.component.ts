import { Component, Injectable, Inject, OnInit } from '@angular/core';
import ApiService from './services/api-service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-root',
    providers: [ApiService],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    template: `
      <div>
        <header class="app-bar">
          <span class="logo">
            Awesome Weather
          </span>
          <div>
              <span class="data">Your Position: {{data.latitude}},{{data.longitude}}</span>
          </div>
        </header>
        <div class="main-content">
            <div class="special-val col-xs-4">
              <span class="cur-temp {{data.icon}}">{{data.temp}}\xB0C</span>
            </div>
            <div class="detail-val col-xs-8">
                <span class="cur-data col-xs-12">Date: {{data.today}} {{data.timezone}}</span>
                <span class="cur-data col-xs-12">Summary: {{data.summary}}</span>
                <span class="cur-data col-xs-12">Precipitation: {{data.precipitation}}%</span>
                <span class="cur-data col-xs-12">Humidity: {{data.humidity}}%</span>
            </div>
          </div>
        </div>
    `
})
export class AppComponent implements OnInit {
    title = 'AwesomeWeatherJs';
    selectedItem = '';

    data = {};

    onSelect = (item) => {
        this.selectedItem = item;
    };

    constructor(public apiService: ApiService){}

    ngOnInit(): void {
        navigator.geolocation.getCurrentPosition((pos) => {
            this.apiService.geoLocation = pos;
            this.apiService.getData().subscribe((data) => {
                console.log(data);
                this.data = data
            });
        }, (err) => {
            console.log(err);
        });

    }
}
