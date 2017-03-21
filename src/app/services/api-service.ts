import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http, Response, Jsonp, URLSearchParams }from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export default class ApiService {

    constructor (private jsonp: Jsonp) {}

    public geoLocation = {
        coords: {
            latitude: 0,
            longitude: 0
        }
    };

    private apiUrl = '';

    private extractData(res: Response) {
        let data = res.json();
        let temp = ((f) => {
          let temperature = (f - 32) * 5 / 9;
          return Math.round((temperature) * 100) / 100;
        })(data.currently.temperature);

        let date = ((timestamp) => {
          let timestring = new Date(timestamp * 1000),
              months = 'Jan,Feb,Mar,Apr,Myi,Jun,Jul,Aug,Sep,Oct,Nov,Dec'.split(','),
              year = timestring.getFullYear(),
              month = months[timestring.getMonth()],
              date = timestring.getDate(),
              hour = timestring.getHours(),
              time = date + '. ' + month + ' ' + year + ', ' + hour + 'h' ;

          return time;
        })(data.currently.time);

        let result = {
            icon: data.currently.icon,
            latitude: Math.round((data.latitude) * 100) / 100,
            longitude: Math.round((data.longitude) * 100) / 100,
            temp: temp,
            today: date,
            precipitation: Math.round((data.currently.precipProbability) * 100),
            humidity: Math.round((data.currently.humidity) * 100),
            summary: data.currently.summary,
        }

        return result || { };
    }

    public getData = () => {
        let params = new URLSearchParams();
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');

        let coord = this.geoLocation.coords;

        this.apiUrl = `https://api.darksky.net/forecast/f4cdaf9c94d44202f8638115338f52a4/${coord.latitude},${coord.longitude}`;

        return this.jsonp
            .get(this.apiUrl, { search: params })
            .map(this.extractData);
    }
}
