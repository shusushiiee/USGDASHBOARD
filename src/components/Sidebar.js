import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faTasks, faListAlt, faCalendarAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css'; // Add custom styles for the sidebar

const Sidebar = () => {
    return (
        <div className="d-flex flex-column vh-100 bg-dark text-light p-3" style={{ width: '250px', position: 'fixed' }}>
            <div>
                <h5>Service Management</h5>
            </div>
            {/* Add margin-top to push down the nav items */}
            <ul className="nav flex-column" style={{ marginTop: '30px' }}>
                <li className="nav-item">
                    <Link to="/dashboard" className="nav-link text-light">
                        <FontAwesomeIcon icon={faTachometerAlt} className="me-2" />
                        Dashboard
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/service-management" className="nav-link text-light">
                        <FontAwesomeIcon icon={faTasks} className="me-2" />
                        Service Management
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/activity-logs" className="nav-link text-light">
                        <FontAwesomeIcon icon={faListAlt} className="me-2" />
                        Activity Logs
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/schedule" className="nav-link text-light">
                        <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
                        Schedule
                    </Link>
                </li>
                <li className="nav-item mt-auto">
                    <Link to="/login" className="nav-link text-light">
                        <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />
                        Logout
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
