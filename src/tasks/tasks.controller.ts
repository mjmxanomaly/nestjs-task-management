import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './tasks.models';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  async getAllTasks(): Promise<Task[]> {
    return await this.taskService.getAllTasks();
  }

  @Get('/:id')
  async getTaskById(@Param('id') id: string): Promise<Task> {
    return await this.taskService.getTaskById(id);
  }

  @Post()
  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return await this.taskService.createTask(createTaskDto);
  }

  @Delete('/:id')
  async deleteTask(@Param('id') id: string): Promise<void> {
    await this.taskService.deleteTask(id);
  }

  @Patch('/:id/status')
  async updateTaskStatus(@Param('id') id: string, @Body('status') status: TaskStatus): Promise<Task> {
    return await this.taskService.updateTaskStatus(id, status);
  }
}
