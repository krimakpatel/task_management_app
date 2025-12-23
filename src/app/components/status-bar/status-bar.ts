import { Component, inject } from '@angular/core';
import { Tasks } from '../../services/tasks';

@Component({
  selector: 'app-status-bar',
  imports: [],
  templateUrl: './status-bar.html',
  styleUrl: './status-bar.css',
})
export class StatusBar {
  taskService = inject(Tasks);
  status = this.taskService.getComputedTaskStatus;
}
