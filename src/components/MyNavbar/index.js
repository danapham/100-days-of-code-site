import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
} from 'reactstrap';

export default function MyNavbar() {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link className="navbar-brand" to='/'>100 day of...</Link>
      </Navbar>
    </div>
  );
}
