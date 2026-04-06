

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_URL from '../config.js';
import { toast } from "react-toastify";
import './tasks.css';

const Tasks = ({ token }) => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({ id: '', title: '', status: '' });
    const [isEditing, setIsEditing] = useState(false);

    const fetchTasks = async () => {
        const response = await axios.get(`${API_URL}/gettasks`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        setTasks(response.data.tasks);
    };

    useEffect(() => {
        fetchTasks();
    }, [token]);

    const handleCreateTask = async () => {
        
        if (!newTask.title || !newTask.status) {
            toast.error("Title and status are required!");
            return;
        }
        await axios.post(`${API_URL}/createtask`, { title: newTask.title, status: newTask.status }, {
            headers: { Authorization: `Bearer ${token}` },
        });
        toast.success("Task created successfully!");
        fetchTasks();
        resetForm();
    };

    const handleUpdateTask = async () => {
        if (!newTask.title || !newTask.status) {
            toast.error("Title and status are required!");
            return;
        }
        await axios.put(`${API_URL}/updatetasks/${newTask.id}`, { title: newTask.title, status: newTask.status }, {
            headers: { Authorization: `Bearer ${token}` },
        });
        toast.success("Task updated successfully!");
        fetchTasks();
        resetForm();
    };

    const resetForm = () => {
        setNewTask({ id: '', title: '', status: '' });
        setIsEditing(false);
    };

    const handleEditClick = (task) => {
        setNewTask({ id: task.id, title: task.title, status: task.status });
        setIsEditing(true);
    };

    const handleDeleteTask = async (id) => {
        await axios.delete(`${API_URL}/deletetasks/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        toast.success("Task deleted successfully!");
        fetchTasks();
    };

    return (
        <div className="tasks-container">
            <h2>Tasks</h2>
            <div className="input-group">
                <input
                    type="text"
                    placeholder="Task Title"
                    value={newTask.title}
                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                />
            </div>
            <div className="input-group">
                <input
                    type="text"
                    placeholder="Task Status"
                    value={newTask.status}
                    onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
                />
            </div>
            <button onClick={isEditing ? handleUpdateTask : handleCreateTask}>
                {isEditing ? "Update Task" : "Add Task"}
            </button>

            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <span>{task.title} - {task.status}</span>
                        <div className="task-buttons">
                            <button onClick={() => handleEditClick(task)}>Update</button>
                            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tasks;

