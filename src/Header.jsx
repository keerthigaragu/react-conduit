import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './header.scss';

const Header = ({ appName }) => {
  return (
    <div className='header'>
      <Router>
        <div className='conduit'> conduit </div>
        <div className='links'>
          <Link to='/home'> Home </Link>
          <Link to='/login'> Sign In </Link>
          <Link to='signup'> Sign Up </Link>
        </div>
      </Router>
    </div>
  );
};

export default Header;