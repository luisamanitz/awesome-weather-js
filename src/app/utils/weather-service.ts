import jsonp from './jsonp';
import location from './loc';
import timeConverter from './convertDate';
import tempConverter from './convertTemp';
import { Component, Injectable, Inject } from '@angular/core';


@Injectable()
export default class WeatherService {
  public icon = 'clear-day';
  public temprature:number = 0.1;
  public coordLat = 'Latitude';
  public coordLon = 'Longitude';

  public setData = (json) => {

    this.temprature = -0.66;
  };

  public getLocation = (pos) => {
    let coord = pos.coords,
        date = Date.now(),
        temp,
        apiURL = `https://api.darksky.net/forecast/f4cdaf9c94d44202f8638115338f52a4/${coord.latitude},${coord.longitude}`;

    jsonp(apiURL,this.setData);
  };

  public getData = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      this.getLocation(pos);
    }, () => {});
  }
}
