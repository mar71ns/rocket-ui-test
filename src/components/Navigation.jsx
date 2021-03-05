import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <ul>
    <li><Link to="/launches">Launches</Link></li>
    {/* <li><Link to="/teste">teste</Link></li> */}
  </ul>
);

export default Navigation;
