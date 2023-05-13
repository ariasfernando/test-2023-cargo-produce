import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Priority } from 'src/app/model/priority.enum';
import { Task } from 'src/app/model/task.model';
import { DateFormatService } from 'src/app/shared/date-format/date-format.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements AfterViewInit {
  @Input() task!: Task;
  @Output() updateTask = new EventEmitter<Task>();
  @ViewChild('select') select!: ElementRef;

  public Priority = Priority;

  constructor(private dateFormat: DateFormatService) {
  }

  ngAfterViewInit(): void {
    this.select.nativeElement.value = this.task.priority.toLowerCase();
  }

  onSelectChange(): void {
    const task = { ...this.task, priority: this.select.nativeElement.value }
    this.updateTask.emit(task);
  }

  getNewSpentTime(newSpentTime: number) {
    const task = { ...this.task, timeSpent: newSpentTime }
    this.updateTask.emit(task);
  }

  showSpentTime(): string {
    return this.dateFormat.secondsToMinutesAndSeconds(this.task.timeSpent);
  }

}
