import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  // penamaan fungsi bebas, tidak harus sama dengan di service
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }
}
