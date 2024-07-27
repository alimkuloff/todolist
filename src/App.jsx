import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import 'antd/dist/reset.css';
import "./index.css";
const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>To-Do List</h1>
        <TaskForm />
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;
