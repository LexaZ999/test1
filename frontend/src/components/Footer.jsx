import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTelegramPlane, FaVk } from 'react-icons/fa';

const Footer = () => (
  <Container className="py-5">
    <Row className="align-items-center text-md-start text-center g-4">
      <Col lg="2" md="3" className="">
        <a
          href="https://teamlab.pro/"
          className="text-decoration-none link link-dark fs-2 px-auto"
        >
          <span className="fw-bold">team</span>
          lab
        </a>
      </Col>
      <Col lg="8" md="6">
        © 2016-2022 TeamLab
      </Col>
      <Col lg="2" md="3">
        <a
          href="https://salebot.site/r/ccee170f1aec40870e707156aeae2693_1"
          className="link-dark me-5"
        >
          <FaTelegramPlane size={30} />
        </a>
        <a href="https://vk.com/teamlabpro" className="link-dark">
          <FaVk size={30} />
        </a>
      </Col>
    </Row>
  </Container>
);

export default Footer;
