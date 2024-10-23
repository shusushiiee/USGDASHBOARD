import React from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, ResponsiveContainer } from 'recharts';
import './Dashboard.css';

// Sample data for charts
const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

// Sample user logs data
const userLogs = [
  { id: 1, username: 'john_doe', action: 'Logged in', timestamp: '2024-10-23 10:00' },
  { id: 2, username: 'jane_smith', action: 'Logged out', timestamp: '2024-10-23 10:05' },
  { id: 3, username: 'bob_johnson', action: 'Updated profile', timestamp: '2024-10-23 10:10' },
//   { id: 4, username: 'alice_wang', action: 'Deleted account', timestamp: '2024-10-23 10:15' },
];

const UserTile = ({ title, count }) => {
  return (
    <div className="tile">
      <div className="tile-header">
        <h3>{title}</h3>
      </div>
      <div className="tile-footer">
        <span>{count}</span>
        <i className="icon"></i>
      </div>
    </div>
  );
};

// Updated User Logs Table Component
const UserLogsTable = () => {
  return (
    <div style={{ padding: '5px' }}>
      <h3>User Logs</h3>
      <table className='mb-5' style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>ID</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Username</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Action</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {userLogs.map(log => (
            <tr key={log.id}>
              <td style={{ border: '1px solid #ddd', padding: '5px' }}>{log.id}</td>
              <td style={{ border: '1px solid #ddd', padding: '5px' }}>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
                    {/* <span className="text-gray-600 ">👤</span> User icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5" style={{ width: '17px', marginTop: '-2px' }}>
  <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
</svg>&nbsp; {log.username}
                  </div>
                  {/* {log.username} */}
                </div>
              </td>
              <td style={{ border: '1px solid #ddd', padding: '5px' }}>{log.action}</td>
              <td style={{ border: '1px solid #ddd', padding: '5px' }}>{log.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const UserTiles = () => {
  return (
    <div>
      <div className="tiles-container">
        <UserTile title="Total Users" count="100" />
        <UserTile title="Active Users" count="100" />
        <UserTile title="Deactivated Users" count="100" />
        <UserTile title="Expired Users" count="100" />
      </div>
      <div style={{ display: 'flex', marginTop: '25px', gap: '11px' }}>
        <div style={{ flex: '0.6', backgroundColor: 'white', height: '310px', boxShadow: '0px 4px 8px rgba(0.2, 0.2, 0.2, 0.2)' }}>
          <ResponsiveContainer>
            <LineChart data={data}>
              <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div style={{ flex: '0.4', backgroundColor: 'white', height: '310px', boxShadow: '0px 4px 8px rgba(0.2, 0.2, 0.2, 0.2)' }}>
          <ResponsiveContainer>
            <BarChart data={data}>
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div style={{ display: 'flex', marginTop: '25px', gap: '11px' }}>
        <div style={{ flex: '0.7', backgroundColor: 'white', height: '310px', boxShadow: '0px 4px 8px rgba(0.2, 0.2, 0.2, 0.2)' }}>
          <UserLogsTable />
        </div>
        <div style={{ flex: '0.3', backgroundColor: 'white', height: '310px', boxShadow: '0px 4px 8px rgba(0.2, 0.2, 0.2, 0.2)' }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie data={data} dataKey="amt" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default UserTiles;
