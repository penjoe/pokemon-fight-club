import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Jumbotron>
      <h1>Pokémon Fight Club</h1>
      <p>
        Two pokémon enter, one pokémon leaves.
      </p>
    </Jumbotron>
  </Navbar>
  );
};

export default Header;
