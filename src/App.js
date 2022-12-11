import React, { useState } from 'react';
import './App.css';
import Template from './components/Template';
import TodoList from './components/TodoList';
import { MdAddCircleOutline, MdAddCircle, MdRealEstateAgent } from 'react-icons/md';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '할일1',
      checked: true,
    },

    {
      id: 2,
      text: '할일2',
      checked: false,
    },
  ]);

  return (
    <div>
      <Template todoLength={todos.length}>
        <TodoList todos={todos} />
        <div className="add_todo_button">
          <MdAddCircle />
        </div>
      </Template>
    </div>
  );
};

export default App;
