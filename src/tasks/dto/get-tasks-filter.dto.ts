import { TaskStatus } from '../tasks.models';

export class GetTasksFilterDto {
  status: TaskStatus;
  search: string;
}