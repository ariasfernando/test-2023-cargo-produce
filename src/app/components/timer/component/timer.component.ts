import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CountdownComponent } from 'ngx-countdown';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerComponent {
  @Input() timeSpent!: number;
  @ViewChild('cd', { static: false }) private countdown!: CountdownComponent;
  @Output() updateSpentTime = new EventEmitter<number>();

  public working: boolean = false;

  private totalTime: number = 1800;

  startTimer() {
    this.countdown.begin();
    this.working = true;
  }

  pauseTimer() {
    this.countdown.pause();
    this.working = false;
    this.updateSpentTime.emit(this.formatSpentTime(this.countdown.left));
  }

  getLeftTime() {
    return this.totalTime - this.timeSpent;
  }

  private formatSpentTime(remainingTime: number) {
    return this.totalTime - ( remainingTime / 1000 );
  }
}
