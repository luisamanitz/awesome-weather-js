import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http, Response, Jsonp, URLSearchParams }from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export default class ApiService {

   constructor (private jsonp: Jsonp) {}

   public test = 'huhuhuhuhu';

   private apiUrl = 'https://api.darksky.net/forecast/f4cdaf9c94d44202f8638115338f52a4/37.8267,-122.4233';

   private extractData(res: Response) {
       let body = res.json();
       return body || { };
   }

   public getData = () => {
       let params = new URLSearchParams();
       params.set('format', 'json');
       params.set('callback', 'JSONP_CALLBACK');

       return this.jsonp
           .get(this.apiUrl, { search: params })
           .map(this.extractData);
   }
}
