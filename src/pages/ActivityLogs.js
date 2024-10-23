import React, { useState } from 'react';

// Assuming the same services array from the ServiceManagement page
const servicesList = [
  "iBANK",
  "INTEGRATOR",
  "INSTANT PAY",
  "PAPSS",
  "CARD FUSION",
  "NRA ECR",
  "DANGOTE",
  "CORE API (v1.0 & v2.0)",
  "WALLET",
  "MI YONE TELLER",
  "NEW CIB",
  "CORZAP",
  "INTERSWITCH GATEWAY",
  "ISO 8583 GATEWAY",
  "SMS GATEWAY",
  "EMAIL GATEWAY"
];

const ActivityLog = ({ logs = [] }) => {
  const [filters, setFilters] = useState({
    date: '',
    service: '',
    action: '',
    user: ''
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const filteredLogs = logs.filter((log) => {
    const dateMatch = filters.date ? log.timestamp.includes(filters.date) : true; // Correct reference for date
    const serviceMatch = filters.service ? log.serviceName.includes(filters.service) : true; // Correct reference for service
    const actionMatch = filters.action ? log.action.includes(filters.action) : true; // Correct reference for action
    const userMatch = filters.user ? log.user.includes(filters.user) : true; // Correct reference for user
    return dateMatch && serviceMatch && actionMatch && userMatch;
  });

  return (
    <div style={{ padding: '20px' }}>
      <h3>Activity Logs</h3>
      <div style={{ marginBottom: '15px' }}>
        {/* Date filter with calendar dropdown */}
        <input
          type="date"
          name="date"
          value={filters.date}
          onChange={handleFilterChange}
          style={{ marginRight: '10px' }}
        />

        {/* Service filter with dropdown */}
        <select
          name="service"
          value={filters.service}
          onChange={handleFilterChange}
          style={{ marginRight: '10px' }}
        >
          <option value="">Filter by Service</option>
          {servicesList.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>

        {/* Action filter with dropdown */}
        <select
          name="action"
          value={filters.action}
          onChange={handleFilterChange}
          style={{ marginRight: '10px' }}
        >
          <option value="">Filter by Action</option>
          <option value="Activated">Activated</option>
          <option value="Deactivated">Deactivated</option>
        </select>

        {/* User filter */}
        <input
          type="text"
          placeholder="Filter by User"
          name="user"
          value={filters.user}
          onChange={handleFilterChange}
        />
      </div>

      {filteredLogs.length === 0 ? (
        <p>No logs match your filters.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Service</th>
              <th>Action</th>
              <th>User</th>
            </tr>
          </thead>
          <tbody>
            {filteredLogs.map((log, index) => (
              <tr key={index}>
                <td>{log.timestamp}</td> {/* Update to match the log structure */}
                <td>{log.serviceName}</td> {/* Update to match the log structure */}
                <td>{log.action}</td> {/* Update to match the log structure */}
                <td>{log.user}</td> {/* Update to match the log structure */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ActivityLog;
