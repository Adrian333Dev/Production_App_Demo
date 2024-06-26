export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export interface CreateTodoDto {
  title: string;
}

export interface UpdateTodoDto {
  title?: string;
  completed?: boolean;
}
