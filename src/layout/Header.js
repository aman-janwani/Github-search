import React, { useState, useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

import { Link } from "react-router-dom";

import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";

const Header = () => {
  const context = useContext(UserContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand>
        <Link to="/" className="text-white">
          <img
            height="40px"
            width="40px"
            className="rounded-circle"
            alt="aman"
            src="data:image/png;base64,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"
          />
        </Link>
      </NavbarBrand>
      <NavbarText className="text-white">
        {context.user?.email ? `Hi👋 "${context.user?.email}"` : "Hello 👋, User"}
      </NavbarText>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} className="left" navbar>
        <Nav className="ml-auto" navbar>
          {context.user ? (
            <NavItem>
              <NavLink
                onClick={() => {
                  context.setUser(null);
                  toast(` you are now Logout`, { type: "error" });
                }}
                className="NavLink text-white"
              >
                Logout
              </NavLink>
            </NavItem>
          ) : (
            <>
              <NavItem>
                <NavLink tag={Link} to="/signin" className="NavLink text-white">
                  Signin
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/signup" className="NavLink text-white">
                  Signup
                </NavLink>
              </NavItem>
            </>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
