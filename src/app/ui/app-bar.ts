import { Component } from '@angular/core';

@Component({
  selector: 'app-bar',
  template: `
    <header class="app-bar row middle-xs">
      <span class="logo col-xs-10">
        Awesome Weather
      </span>
      <nav class="col-xs-2">
        <div class="row middle-xs between-xs">
          <span class="link">Copyright</span>
        </div>
      </nav>
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
    .link {
      color: white;
      font-size: 14px;
      line-height: 1.3em;
      font-weight: 400;
      cursor: pointer;
    }
    `]
})

export class AppBar {}
