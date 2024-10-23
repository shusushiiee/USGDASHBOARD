import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <div className="container-fluid">
                {/* <div className=""> This div will help in floating content to the right */}
                    <a className="navbar-brand" style={{ fontSize: "18px", padding: '5px', float: 'right' }} href="/">
                        {/* Service Management Dashboard */}
                    </a>
                    <Link className="navbar-brand" style={{ float: 'right'}}>Welcome</Link>
                {/* </div> */}
            </div>
        </nav>
    );
};

export default Navbar;
