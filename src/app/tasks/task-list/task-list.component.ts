import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, filter, tap } from 'rxjs';
import { Task } from 'src/app/model/task.model';
import { DateFormatService } from 'src/app/shared/date-format/date-format.service';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit, OnDestroy {
  
  tasks: Task[] = [];
  textFilter: string = '';
  private subscriptions: Subscription = new Subscription();

  constructor(
    private tasksService: TasksService,
    private dateFormat: DateFormatService
    ){}

  ngOnInit(): void {
    this.subscriptions.add(
      this.tasksService.getTasks().pipe(
        tap( tasks => this.tasks = tasks ),
      ).subscribe()
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  provideTasks(): Task[] {
    console.log("provide", this.textFilter);
    return this.textFilter === '' ? this.tasks : this.tasks.filter( task => task.name.includes(this.textFilter) );
  }

  updateTask (task: Task) {
    this.subscriptions.add(
      this.tasksService.updateTask(task).pipe(
        tap( task => this.tasks = this.tasks.map( savedTask => savedTask.id === task.id ? task : savedTask ).filter( task => task.timeSpent < 1800 ) )
      ).subscribe()
    );
  }

  totalSpentTime(): string {
    return this.dateFormat.secondsToMinutesAndSeconds(this.tasks.reduce( (totalTime, taskTime) => totalTime + taskTime.timeSpent, 0 ));
  }

}
