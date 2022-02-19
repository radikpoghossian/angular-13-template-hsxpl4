import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  template: `
    <h1>Main works</h1>
    <a style="margin-left:10px" routerLink="/main/home/2">Jump to home/2</a>
    <router-outlet></router-outlet>
  `,
})
export class MainComponent {
  constructor(private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params.subscribe((data) => {
      console.log(data, 'parent');
    });
  }
}
