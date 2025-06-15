import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Portada7PageRoutingModule } from './portada7-routing.module';

import { Portada7Page } from './portada7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Portada7PageRoutingModule
  ],
  declarations: [Portada7Page]
})
export class Portada7PageModule {}
