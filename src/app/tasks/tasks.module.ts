import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TasksRoutingModule } from './tasks-routing.module';

import { SharedModule } from '../shared/shared.module';
import { TimerModule } from '../components/timer/timer.module';

import { TasksService } from './services/tasks.service';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

import { TaskListComponent } from './task-list/task-list.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [TaskListComponent, TaskComponent],
  providers: [
    TasksService
  ],
  imports: [
    CommonModule,
    FormsModule,
    TasksRoutingModule,
    SharedModule,
    MatCardModule,
    MatInputModule,
    TimerModule
  ]
})
export class TasksModule { }
