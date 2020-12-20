import React from 'react';
import {Card} from 'react-bootstrap';

function Winner(props) {
  console.log(props);
  // recieve winning pokemon as props / through redux

  // render out div with winners name

  return (
    <>
      <h1>We have a winner!</h1>
      <Card style={{width: '18rem'}}>
        <Card.Img variant="top" src={props.data.img} />
        <Card.Body>
          <Card.Title>{props.data.name}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default Winner;
