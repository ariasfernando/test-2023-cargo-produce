import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { Task } from 'src/app/model/task.model';

@Injectable()
export class TasksService {
  private jsonServer: string = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {
  }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.jsonServer).pipe(
      map( tasks => tasks.filter( task => task.timeSpent < 1800 ) )
    );
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.jsonServer}/${task.id}`, task);
  }
}
