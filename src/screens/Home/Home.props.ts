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

export interface FunctionProps {
  handleChecked: (taskId: string) => void;
  handleDelete: (taskId: string) => void;
}
