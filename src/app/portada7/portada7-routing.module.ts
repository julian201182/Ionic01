import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Portada7Page } from './portada7.page';

const routes: Routes = [
  {
    path: '',
    component: Portada7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Portada7PageRoutingModule {}
