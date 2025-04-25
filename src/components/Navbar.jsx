
import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // Importing Link and NavLink components from react-router-dom for routing

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <Link to="/" className="navbar-brand text-primary fw-bold">Community Pulse</Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink 
                to="/" 
                className={({isActive}) => 
                  isActive ? "nav-link active fw-medium" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/report" 
                className={({isActive}) => 
                  isActive ? "nav-link active fw-medium" : "nav-link"
                }
              >
                Submit Report
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/all-reports" 
                className={({isActive}) => 
                  isActive ? "nav-link active fw-medium" : "nav-link"
                }
              >
                All Reports
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/resolved" 
                className={({isActive}) => 
                  isActive ? "nav-link active fw-medium" : "nav-link"
                }
              >
                Resolved Reports
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;  // Export the Navbar component so it can be used in other parts of the app
