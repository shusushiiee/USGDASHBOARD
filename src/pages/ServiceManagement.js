import React, { useState, useEffect } from 'react';
import { FaBuilding, FaLink, FaBolt, FaGlobe, FaCreditCard, FaChartLine, FaIndustry, FaLaptopCode, FaWallet, FaReceipt, FaLock, FaComments, FaNetworkWired, FaFileAlt, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const services = [
  { name: "iBANK", icon: <FaBuilding /> },
  { name: "INTEGRATOR", icon: <FaLink /> },
  { name: "INSTANT PAY", icon: <FaBolt /> },
  { name: "PAPSS", icon: <FaGlobe /> },
  { name: "CARD FUSION", icon: <FaCreditCard /> },
  { name: "NRA ECR", icon: <FaChartLine /> },
  { name: "DANGOTE", icon: <FaIndustry /> },
  { name: "CORE API (v1.0 & v2.0)", icon: <FaLaptopCode /> },
  { name: "WALLET", icon: <FaWallet /> },
  { name: "MI YONE TELLER", icon: <FaReceipt /> },
  { name: "NEW CIB", icon: <FaLock /> },
  { name: "CORZAP", icon: <FaComments /> },
  { name: "INTERSWITCH GATEWAY", icon: <FaNetworkWired /> },
  { name: "ISO 8583 GATEWAY", icon: <FaFileAlt /> },
  { name: "SMS GATEWAY", icon: <FaEnvelope /> },
  { name: "EMAIL GATEWAY", icon: <FaEnvelope /> },
];

const ServiceManagement = ({ onServiceToggle }) => {
  const [activeServices, setActiveServices] = useState({});
  const [emergencyLockdown, setEmergencyLockdown] = useState(false); // New state for lockdown
  const navigate = useNavigate();

  // Load active services from localStorage on component mount
  useEffect(() => {
    const storedActiveServices = JSON.parse(localStorage.getItem('activeServices')) || {};
    setActiveServices(storedActiveServices);
  }, []);

  // Toggle the activation of individual services
  const toggleService = (service) => {
    if (emergencyLockdown) {
      alert("Emergency Lockdown is active! Please disable it to change service statuses.");
      return;
    }

    const newActiveState = !activeServices[service.name];

    setActiveServices((prev) => {
      const updatedActiveServices = {
        ...prev,
        [service.name]: newActiveState,
      };
      localStorage.setItem('activeServices', JSON.stringify(updatedActiveServices));
      return updatedActiveServices;
    });

    // Log the service action
    const action = newActiveState ? 'Activated' : 'Deactivated';
    if (onServiceToggle) {
      onServiceToggle(service.name, action, 'currentUser'); // Replace 'currentUser' with actual user info if available
    }
  };

  // Navigate to the activity logs page
  const handleNavigate = () => {
    navigate('/activity-logs');
  };

  // Toggle emergency lockdown status
  const toggleEmergencyLockdown = () => {
    if (emergencyLockdown) {
      setEmergencyLockdown(false);
      if (onServiceToggle) {
        onServiceToggle('Emergency Lockdown', 'Deactivated', 'currentUser');
      }
    } else {
      // Activate lockdown and deactivate all services
      setActiveServices({});
      localStorage.setItem('activeServices', JSON.stringify({})); // Clear active services
      setEmergencyLockdown(true);
      if (onServiceToggle) {
        onServiceToggle('Emergency Lockdown', 'Activated', 'currentUser');
      }
    }
  };

  return (
    <div style={{ padding: '20px', position: 'relative' }}>
      <h3 className="pb-3">Core Banking Services</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
        {services.map((service) => (
          <div
            key={service.name}
            onClick={() => toggleService(service)}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              backgroundColor: activeServices[service.name] ? '#4caf50' : '#d6dde5',
              color: activeServices[service.name] ? '#fff' : '#000',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
              width: '220px',
              textAlign: 'center',
              fontSize: '16px',
              height: '100px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginBottom: '10px',
            }}
          >
            <div style={{ fontSize: '24px' }}>{service.icon}</div>
            {service.name}
          </div>
        ))}
      </div>
      <button
        onClick={handleNavigate}
        style={{
          marginTop: '20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          transition: 'background-color 0.3s, transform 0.3s',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#0056b3';
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#007bff';
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        View Activity Logs
      </button>

      {/* Emergency Lockdown Button */}
      <button
        onClick={toggleEmergencyLockdown}
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          backgroundColor: emergencyLockdown ? '#dc3545' : '#ffc107',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          padding: '10px 15px',
          fontSize: '16px',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
        }}
      >
        {emergencyLockdown ? 'Disable Lockdown' : 'Activate Lockdown'}
      </button>
    </div>
  );
};

export default ServiceManagement;
