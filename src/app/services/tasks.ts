import { computed, Injectable, Signal, signal } from '@angular/core';
import { TASKS_DATA } from '../data';
import { Task } from '../model/task.model';

@Injectable({
  providedIn: 'root',
})
export class Tasks {
  #tasks = signal<Task[]>(TASKS_DATA);
  constructor() {}

  private filterTasks(status: string) {
    return this.#tasks().filter(t => t.status === status);
  }

  getComputedTaskStatus = computed(() => {
    return {
      done : this.filterTasks('DONE').length,
      notStarted : this.filterTasks('NOT_STARTED').length,
      inProgress : this.filterTasks('IN_PROGRESS').length
    }
  })

  getAllTasks() : Signal<Task[]> {
    return this.#tasks.asReadonly()
  }

  updateTask(id: number, status: string) {
    const tasks = this.#tasks().map((t) => {
      return t.id === id ? {
        ...t, 
        status: status
      } : t;
    });

    this.#tasks.set(tasks);
  }

  addNewtask(task: string) {
    const currentTotal = this.#tasks().length;
    this.#tasks.update(status => {
      return [
        ...status, {
          id : currentTotal + 1,
          assignedTo: 'me',
          task: task,
          status: 'NOT_STARTED',
        }
      ]
    })
  }
}
