import React, { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import { getTodos } from '../api/todosApi';
import { Todo } from '../types';

interface Props {
  refresh: boolean;
}

const TodoList: React.FC<Props> = ({ refresh }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async () => {
    const fetchedTodos = await getTodos();
    setTodos(fetchedTodos);
  };

  useEffect(() => {
    fetchTodos();
  }, [refresh]); // Add refresh as a dependency

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onTodoUpdated={fetchTodos} />
      ))}
    </div>
  );
};

export default TodoList;
