import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: MainComponent,
        children: [
          {
            path: 'home/:id',
            loadChildren: () =>
              import('./home/home.module').then((e) => e.HomeModule),
          },
        ],
      },
    ]),
  ],
})
export class MainModule {}
