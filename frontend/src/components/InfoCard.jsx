import React from 'react';
import { Card, Button } from 'react-bootstrap';

const InfoCard = (props) => {
  console.log(props);
  const { title, src, description } = props;

  return (
    <Card className="" style={{ width: '100%' }}>
      <Card.Body>
        <Card.Title className="card-title fw-bold">{title}</Card.Title>
        <Card.Img variant="top" src={src} />
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="outline-dark" className="btn-rounded fw-bold text-uppercase fs-7 py-3 px-5">Подробнее</Button>
      </Card.Body>
    </Card>
  );
};

export default InfoCard;
