import React, {useState} from 'react';
import {Card, ListGroup, Button} from 'react-bootstrap';
import './vs.css';

function Vs(props) {

  const [p1, setP1] = useState(props.pokemon.p1);
  const [p2, setP2] = useState(props.pokemon.p2);
  // const [pokemon, setPokemon] = useState(props.pokemon);
  // make them battle

    // button to do combat
    // pokemon stats to determine winner
    // when health <= 0 combat is over
  
  // pass winning pokemon to winner.js as props / with redux

  function doBattle() {

    let px1 = {...p1};
    let px2 = {...p2};
    px1.stats[0].base_stat = Math.round((px1.stats[0].base_stat + px1.stats[2].base_stat) - px2.stats[1].base_stat);
    px2.stats[0].base_stat = Math.round((px2.stats[0].base_stat + px2.stats[2].base_stat) - px1.stats[1].base_stat);
    // px1.stats[0].base_stat = Math.round((px1.stats[0]));

    if (px1.stats[0].base_stat <= 0) {  
      let winner = {
        img: p2.sprites.front_default,
        name: p2.name,
      };
      props.getWinner(winner)
    }
    else if (px2.stats[0].base_stat <= 0) {
      let winner = {
        img: p1.sprites.front_default,
        name: p1.name,
      };
      props.getWinner(winner)
    };

    setP1(px1);
    setP2(px2);

  };

  return (
    <>
      <div className="pokeFighters">
        <Card style={{width: '18rem'}}>
          <Card.Img variant="top" src={p1.sprites.front_default} />
          <Card.Body>
            <Card.Title>{p1.name}</Card.Title>
            <ListGroup variant="flush">
              <ListGroup.Item>HP: {p1.stats[0].base_stat}</ListGroup.Item>
              <ListGroup.Item>ATK: {p1.stats[1].base_stat}</ListGroup.Item>
              <ListGroup.Item>DEF: {p1.stats[2].base_stat}</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <h1 className="vs-tag"> &#8678; VS &#8680; </h1>
        <Card style={{width: '18rem'}}>
          <Card.Img variant="top" src={p2.sprites.front_default} />
          <Card.Body>
            <Card.Title>{p2.name}</Card.Title>
            <ListGroup variant="flush">
              <ListGroup.Item>HP: {p2.stats[0].base_stat}</ListGroup.Item>
              <ListGroup.Item>ATK: {p2.stats[1].base_stat}</ListGroup.Item>
              <ListGroup.Item>DEF: {p2.stats[2].base_stat}</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <div className="fight-button">
          <Button variant="danger" onClick={ () => doBattle() } >FIGHT!</Button>
        </div>
      </div>
    </>
  )

};

export default Vs;