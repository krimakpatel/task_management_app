import { Injectable, Signal, signal } from '@angular/core';
import { TASKS_DATA } from '../data';
import { Task } from '../model/task.model';

@Injectable({
  providedIn: 'root',
})
export class Tasks {
  #tasks = signal<Task[]>(TASKS_DATA);
  constructor() {}

  getAllTasks() : Signal<Task[]> {
    return this.#tasks.asReadonly()
  }
}
