import React from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

const App: React.FC = () => {
  const [refresh, setRefresh] = React.useState(false);

  const handleTodoUpdated = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <AddTodoForm onTodoAdded={handleTodoUpdated} />
      <TodoList refresh={refresh} />
    </div>
  );
};

export default App;
