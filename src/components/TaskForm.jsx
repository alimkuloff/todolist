import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, deleteAllTasks } from '../features/tasks/tasksSlice';
import { Button, Input, Typography } from 'antd';
import '../styles/TaskForm.css';

const { Title } = Typography;

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(addTask({ title }));
      setTitle('');
    }
  };

  const handleDeleteAll = () => {
    dispatch(deleteAllTasks());
  };

  return (
    <div className="task-form-container">
      <form onSubmit={handleSubmit} className="task-form">
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New Task"
          className="task-input"
        />
        <Button type="primary" htmlType="submit">Add Task</Button>
      </form>
      <Button type="danger" onClick={handleDeleteAll} className="delete-all-button">Delete All Tasks</Button>
    </div>
  );
};

export default TaskForm;
