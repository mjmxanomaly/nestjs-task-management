import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './tasks.models';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  async getAllTasks(): Promise<Task[]> {
    return await this.taskService.getAllTasks();
  }

  @Post()
  async createTask(@Body('title') title: string, @Body('description') description: string): Promise<Task> {
    return await this.taskService.createTask(title, description);
  }
}
