// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TodoList from './TodoList';
import style from './App.css';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <TodoList />
    </div>
  </Provider>
);

export default App;
