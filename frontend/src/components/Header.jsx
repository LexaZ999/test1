import React from 'react';
import {
  Navbar, Container, Nav, Col,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => (
  <Navbar bg="black" variant="dark" className="navbar-position">
    <Container className="flex-lg-row flex-column">
      <Col lg="3" className="mb-5 mt-4 my-lg-3">
        <Navbar.Brand className="fs-2 mx-auto" href="https://teamlab.pro/">
          <span className="fw-bold">team</span>
          lab
        </Navbar.Brand>
      </Col>
      <Col className="text-center">
        <Nav className="me-auto text-uppercase flex-lg-row flex-column">
          <LinkContainer to="my-profile">
            <Nav.Link>Мой профиль</Nav.Link>
          </LinkContainer>
          <LinkContainer to="company-for-internship">
            <Nav.Link>Стажировки</Nav.Link>
          </LinkContainer>
          <LinkContainer to="acceleration-programs">
            <Nav.Link>Акселерационные программы</Nav.Link>
          </LinkContainer>
          <LinkContainer to="testing">
            <Nav.Link>Тестирование</Nav.Link>
          </LinkContainer>
        </Nav>
      </Col>
    </Container>
  </Navbar>
);

export default Header;
