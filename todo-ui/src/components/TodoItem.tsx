import React from 'react';
import { Todo } from '../types';
import { updateTodo, deleteTodo } from '../api/todosApi';

interface Props {
  todo: Todo;
  onTodoUpdated: () => void;
}

const TodoItem: React.FC<Props> = ({ todo, onTodoUpdated }) => {
  const handleToggleCompleted = async () => {
    await updateTodo(todo.id, { completed: !todo.completed });
    onTodoUpdated();
  };

  const handleDelete = async () => {
    await deleteTodo(todo.id);
    onTodoUpdated();
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggleCompleted}
      />
      <span>{todo.title}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;
