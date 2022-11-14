export interface ITaskData {
  id: number;
  text: string;
  startDate: Date;
  deadline: Date;
  status: string;
}

export interface ITask {
  user: string;
  tasks: ITaskData[];
}
