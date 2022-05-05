import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import bannerSvg from '../images/banner.svg';

const Banner = () => (
  <Container className="mb-5">
    <Row className="align-items-center mt-5 flex-lg-row flex-column">
      <Col className="mb-5 mt-5 my-lg-0">
        <h1 className="fw-bold letter-spacing-3 text-nowrap text-center text-lg-start">Построй карьеру в IT!</h1>
      </Col>
      <Col>
        <img src={bannerSvg} className="img-fluid" alt="banner" />
      </Col>
    </Row>
  </Container>
);

export default Banner;
