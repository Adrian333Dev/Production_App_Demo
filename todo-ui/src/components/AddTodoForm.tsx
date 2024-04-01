import React, { useState } from 'react';
import { createTodo } from '../api/todosApi';
import { CreateTodoDto } from '../types';

interface Props {
  onTodoAdded: () => void;
}

const AddTodoForm: React.FC<Props> = ({ onTodoAdded }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodo: CreateTodoDto = { title };
    await createTodo(newTodo);
    setTitle('');
    onTodoAdded();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new todo..."
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;
