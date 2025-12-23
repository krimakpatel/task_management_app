import { Component, inject, output } from '@angular/core';
import { Tasks } from '../../services/tasks';
import { Task } from '../../model/task.model';

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  taskService = inject(Tasks);
  tasks = this.taskService.getAllTasks();
  onStatusSelect = output<Task>();

  getTaskStatus(status: string) {
    return status === 'DONE' ? 'done' : status === 'IN_PROGRESS' ? 'in-progress' : 'not-started';
  }

  changeStatus(task: Task) {
    this.onStatusSelect.emit(task);
  }
}
