import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { StatusBar } from './components/status-bar/status-bar';
import { TaskList } from './components/task-list/task-list';

@Component({
  selector: 'app-root',
  imports: [Navbar, StatusBar, TaskList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task_management_app');
}
