import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
} from 'reactstrap';
import Auth from '../Auth';

export default function MyNavbar(props) {
  const { authed } = props;
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link className="navbar-brand" to='/'>100 days of...</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Auth authed={authed}/>
        </Collapse>
      </Navbar>
    </div>
  );
}
