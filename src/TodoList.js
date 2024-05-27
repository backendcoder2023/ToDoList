// TodoList.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo } from './actions';

const TodoList = () => {
  const [inputValue, setInputValue] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      dispatch(addTodo(inputValue));
      setInputValue('');
    }
  };

  const handleRemoveTodo = (index) => {
    dispatch(removeTodo(index));
  };

  return (
    <div>
      <h1>Todo<span> List</span></h1>
      <input className='input'
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className='add-btn' onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <ul>
            <li key={index}>
            {todo} <button className='remove' onClick={() => handleRemoveTodo(index)}>Remove</button>
          </li>
          </ul>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
