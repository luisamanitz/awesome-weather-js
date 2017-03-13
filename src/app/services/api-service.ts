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
          // runden
          return temperature;
        })(data.currently.temperature);
        // this.getCelsius(data.currently.temperature);

        let result = {
            icon: data.currently.icon,
            latitude: data.latitude,
            longitude: data.longitude,
            temp: temp
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