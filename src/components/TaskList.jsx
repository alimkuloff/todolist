import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';
import { Select, Input, Space } from 'antd';
import '../styles/TaskList.css';

const { Option } = Select;

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  }).filter(task => task.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="task-list">
      <Space direction="vertical" className="filter-container">
        <Select defaultValue="all" onChange={(value) => setFilter(value)} className="filter-select">
          <Option value="all">All</Option>
          <Option value="completed">Completed</Option>
          <Option value="incomplete">Incomplete</Option>
        </Select>
        <Input 
          placeholder="Search tasks"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </Space>
      <Space direction="vertical" className="tasks-container">
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </Space>
    </div>
  );
};

export default TaskList;
