import { Component, computed, inject, input, output } from '@angular/core';
import { Task } from '../../model/task.model';
import { Tasks } from '../../services/tasks';

@Component({
  selector: 'app-status-panel',
  imports: [],
  templateUrl: './status-panel.html',
  styleUrl: './status-panel.css',
})
export class StatusPanel {
  task = input<Task | null>();
  taskService = inject(Tasks);
  newStatus = '';
  isUpdateMode = computed(() => !!this.task());
  onStatusClose = output();

  handleSelectChange(event: any) {
    this.newStatus = event.target.value;
  }

  updateStatus() {
    const task = this.task()!;
    this.taskService.updateTask(+task.id, this.newStatus);
  }

  onAdd(task: string) {
    this.taskService.addNewtask(task);
  }

  onClose() {
    this.onStatusClose.emit();
  }
}
