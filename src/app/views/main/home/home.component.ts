import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
    <p>Home works</p>
  `,
})
export class HomeComponent {
  constructor(private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params.subscribe((params) => {
      console.log(params, 'child');
    });
  }
}
