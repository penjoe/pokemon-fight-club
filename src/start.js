import React from 'react'
import Button from 'react-bootstrap/Button';

function Start(props) {

  // make axios call to pokeAPI via props
    // random id between 1 and 151 for original 

  // pass two individual pokemon to redux store

  // render out button to make call

  function handleClick(e) {
    e.preventDefault();
    props.get();
  }

  return (
    <>
      <Button variant="primary" onClick={handleClick} >Click me to start a random battle!</Button>
    </>
  )

};

export default Start;