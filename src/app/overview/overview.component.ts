import { Component, OnInit } from '@angular/core';
import locationp from '../utils/loc';
import error from '../utils/loc';

@Component({
  selector: 'app-overview',
  template: `
    <h2>
      Dashboard
    </h2>
  `,
  styles: []
})

export class OverviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(locationp, error);
  }

}
