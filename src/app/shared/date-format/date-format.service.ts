import { Injectable } from '@angular/core';

@Injectable()
export class DateFormatService {

  constructor() { }

  secondsToMinutesAndSeconds(time: number): string {
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;
    return `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;
  }
}
