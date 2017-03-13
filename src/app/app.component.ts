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
        <header class="app-bar row middle-xs">
          <span class="logo col-xs-10">
            Awesome Weather
          </span>
          <div class="col-xs-2">
            <div class="row middle-xs between-xs">
              <span class="data">Your Position: {{data.latitude}},{{data.longitude}}</span>
            </div>
          </div>
        </header>
        <div class="currently {{data.icon}}" >
            {{selectedItem.name}}
            {{data.timezone}}
            {{data.latitude}}
            {{data.longitude}}
            {{data.temp}}
        </div>
        <h2>
            JAJA!
        </h2>
        </div>
        `
})
export class AppComponent implements OnInit {
    title = 'app works!';
    hero = 'Whatever';
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
