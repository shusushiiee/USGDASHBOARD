import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import ServiceManagement from './pages/ServiceManagement';
import ActivityLogs from './pages/ActivityLogs';
import Schedule from './pages/Scheduler';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    // Initialize logs from localStorage or an empty array
    const [logs, setLogs] = useState(() => {
        const savedLogs = localStorage.getItem('logs');
        return savedLogs ? JSON.parse(savedLogs) : [];
    });

    // Function to handle service toggling and logging
    const handleServiceToggle = (serviceName, action, user) => {
        const newLog = {
            serviceName,
            action,
            user,
            timestamp: new Date().toLocaleString(), // Log the current date and time
        };

        // Append the new log entry to the log state
        const updatedLogs = [...logs, newLog];
        setLogs(updatedLogs);

        // Store the updated logs in localStorage
        localStorage.setItem('logs', JSON.stringify(updatedLogs));
    };

    // Clear logs on logout or whenever required
    const handleLogout = () => {
        setLogs([]);
        localStorage.removeItem('logs');
        // Implement your logout logic here
    };

    return (
        <Router>
            <div className="d-flex" style={{ overflowX: 'hidden' }}>
                <Sidebar />
                <div className="flex-grow-1" style={{ marginLeft: '250px', overflowX: 'hidden' }}>
                    <Navbar />
                    <div className="container mt-3" style={{ overflowX: 'hidden' }}>
                        <Routes>
                            <Route path="/dashboard" element={<Dashboard />} />
                            {/* Pass the handleServiceToggle function to ServiceManagement */}
                            <Route 
                                path="/service-management" 
                                element={<ServiceManagement onServiceToggle={handleServiceToggle} />} 
                            />
                            {/* Pass the logs to ActivityLogs */}
                            <Route 
                                path="/activity-logs" 
                                element={<ActivityLogs logs={logs} />} 
                            />
                            <Route path="/schedule" element={<Schedule />} />
                            <Route path="/login" element={<Login />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default App;
