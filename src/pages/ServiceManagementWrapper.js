import React, { useState } from 'react';
import ServiceManagement from './ServiceManagement';
import ActivityLog from './ActivityLog';

const ServiceManagementWrapper = () => {
  const [logs, setLogs] = useState([]);

  const handleServiceToggle = (serviceName, action, user) => {
    const newLog = {
      date: new Date().toLocaleString(), // Log the date and time of action
      service: serviceName,
      action: action, // "Activated" or "Deactivated"
      user: user, // Assuming user info is available
    };

    setLogs((prevLogs) => [...prevLogs, newLog]);
  };

  return (
    <div>
      {/* Pass the onServiceToggle function as a prop */}
      <ServiceManagement onServiceToggle={handleServiceToggle} />
      <ActivityLog logs={logs} />
    </div>
  );
};

export default ServiceManagementWrapper ;
