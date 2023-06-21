export type TaskItems = {
  id: string;
  text: string;
  checked: boolean;
};

export interface TasksProps {
  tasks: TaskItems[];
}

export interface TaskProps {
  task: TaskItems;
}
