import { Component, Injectable, Inject, OnInit } from '@angular/core';
import ApiService from './services/api-service';
import { Observable } from 'rxjs/Observable';

@Component({
   selector: 'app-root',
   providers: [ApiService],
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css'],
   template: `
       <h1 async>
           {{selectedItem.name}}
           {{data.timezone}}
       </h1>
       <h2>
           JAJA!
       </h2>
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
       this.apiService.getData().subscribe((data) => {
           console.log(data);
           this.data = data
       })
   }
}
