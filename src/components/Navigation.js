import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";

function Navigation() {
  return (
    <header className="shadow">
      <Navbar bg="light" expand="md" className="navigation shadow-sm">
        <Container>
          <Link to="/">
            <Navbar.Brand>
              <h3 className="mb-0">The YAY Company</h3>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbar-nav" className="border-0"/>
          <Navbar.Collapse id="navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={NavLink} exact to="/" className="px-2 py-3 py-md-2" activeClassName="active">
              Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/news" className="px-2 py-3 py-md-2" activeClassName="active">
              News
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact" className="px-2 py-3 py-md-2" activeClassName="active">
              Contact
              </Nav.Link>
            </Nav>
            <Form inline className="py-4">
              <FormControl
                type="text"
                placeholder="Search" className="rounded-left"
              />
                <Button variant="primary" className="rounded-right">Go</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Navigation;