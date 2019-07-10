import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import * as Material from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    Material.MatToolbarModule
  ],
  exports : [Material.MatToolbarModule]
})
export class MaterialModule { }
