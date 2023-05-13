import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DateFormatService } from './date-format/date-format.service';

@NgModule({
  declarations: [],
  providers: [
    DateFormatService
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class SharedModule { }
