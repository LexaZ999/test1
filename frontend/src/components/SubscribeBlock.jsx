import React from 'react';
import { Container, Button } from 'react-bootstrap';

const SubscribeBlock = () => {
  const divStyle = {
    height: '1px',
    background: '#adb5bd',

  };
  return (
    <div className="bg-black">
      <Container className="text-white d-flex flex-column align-items-center py-5">
        <h2>Хочешь начать карьеру в IT?</h2>
        <div className="w-100 my-3" style={divStyle} />
        <p className="text-center ">
          Подпишись на чат-бота Teamlab. Мы делимся лайфхаками, дарим подарки,
          рассказываем о вакансиях и наших мероприятиях.
        </p>
        <div className="w-100 my-3" style={divStyle} />
        <Button variant="purple" className="fw-bold text-uppercase py-3 px-5">
          подписаться на чат-бота
        </Button>
      </Container>
    </div>
  );
};
export default SubscribeBlock;
