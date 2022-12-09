import React, { useState } from 'react';
import './App.css';
import Template from './components/Template';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '할일1',
      checkde: true,
    },
  ]);
  return (
    <div>
      <Template>
        <TodoList todos={todos} />
      </Template>
    </div>
  );
};

export default App;
