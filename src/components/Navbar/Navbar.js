import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar bg-primary'>
      <h1>Job Portal</h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/shortlisted'>Shortlisted</Link>
        </li>
        <li>
          <Link to='/rejected'>Rejected</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
