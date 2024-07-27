import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTaskStatus } from '../features/tasks/tasksSlice';
import { Button, Modal, Input, Space, Typography } from 'antd';
import '../styles/TaskItem.css';

const { Text } = Typography;

const TaskItem = ({ task }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleToggleStatus = () => {
    dispatch(toggleTaskStatus(task.id));
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    dispatch(editTask({ id: task.id, title: newTitle }));
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <Text>{task.title}</Text>
      <Space>
        <Button onClick={handleToggleStatus} type={task.completed ? "default" : "primary"}>
          {task.completed ? 'Undo' : 'Complete'}
        </Button>
        <Button onClick={showModal}>Edit</Button>
        <Button onClick={handleDelete} type="danger">Delete</Button>
      </Space>

      <Modal title="Edit Task" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
      </Modal>
    </div>
  );
};

export default TaskItem;
