import { Component, inject } from '@angular/core';
import { Tasks } from '../../services/tasks';

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  taskService = inject(Tasks);
  tasks = this.taskService.getAllTasks();
}
