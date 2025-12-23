import { Component, computed, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { StatusBar } from './components/status-bar/status-bar';
import { TaskList } from './components/task-list/task-list';
import { StatusPanel } from './components/status-panel/status-panel';
import { Task } from './model/task.model';

@Component({
  selector: 'app-root',
  imports: [Navbar, StatusBar, TaskList, StatusPanel],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  currentSelectedTask = signal<Task | null>(null);
  isPanelVisible = false;

  handleStatusSelect(task: Task) {
    this.currentSelectedTask.set(task);
    this.isPanelVisible = true;
  }

  addNewTask() {
    this.currentSelectedTask.set(null);
    this.isPanelVisible = true;
  }

  handleClose() {
    this.currentSelectedTask.set(null);
    this.isPanelVisible = false;
  }
}