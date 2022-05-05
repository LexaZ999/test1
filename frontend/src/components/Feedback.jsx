import React from 'react';
import { Container } from 'react-bootstrap';
import { AiFillQuestionCircle } from 'react-icons/ai';

const Feedback = () => (
  <Container className="pt-5 pb-3 ">
    <div className="bg-light">
      <div className="d-flex align-items-center ms-4 py-4 justify-content-center">
        <AiFillQuestionCircle className="me-3" size={24} color="#a0bd27" />
        <p className="m-0 p-0 fs-6">
          Что-то не работает на сайте, нашел баг?
          <a
            href="https://t.me/anton_titkov"
            className="text-decoration-none link link-purple"
          >
            {' '}
            Напиши нам об этом в Telegram!
          </a>
        </p>
      </div>
    </div>
  </Container>
);

export default Feedback;
