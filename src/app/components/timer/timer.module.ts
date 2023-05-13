import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { CountdownModule } from 'ngx-countdown';

import { TimerComponent } from './component/timer.component';
 

@NgModule({
  declarations: [
    TimerComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    CountdownModule
  ],
  exports: [
    TimerComponent
  ]
})
export class TimerModule { }
