import React, { useEffect, useState, Component } from "react";
import { allCharacters } from "../functions/connection";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css";

const Index = () => {

  //States apra guardar los datos de los Personajes.
  const [characters, setCharacters] = useState(null);
  //Copia del state Characters.
  const [searchCharacters, setSearchCharacters] = useState(null);
  const [explorer, setExplorer] = useState("");

  //Handle para obtener valor de input.
  const handleChange = (e) => {
    setExplorer(e.target.value);
  };

  //Handle para buscar y filtrar la búsqueda al clickar el botón.
  const handleClick = (e) => {
    e.preventDefault();
    filter(explorer);
  };

  //Término para filtrar el caracter.
  const filter = (searchTerm) => {
    //Se realiza el filtrado de caracteres si coinciden con el searchTerm.
    var searchResult = searchCharacters.filter((character) => {
      if (character.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return character;
      }
    });
    //Se setean los caracteres que coinciden con el searchTerm.
    setCharacters(searchResult);
  };

  //Use effect para setear los valores en los state.
  useEffect(() => {
    allCharacters(setCharacters);
    allCharacters(setSearchCharacters);
  }, []);

  return (
    <>
      <Form className="d-flex">
        <Form.Control
              type="text"
              placeholder="Ingrese el personaje"
              className="me-2"
              aria-label="Search"
              value={explorer}
              onChange={handleChange}
              style={{marginLeft: '5em',marginTop: '1em', backgroundColor: 'white', color: 'black'}}
            />
        <button type="buttton" onClick={handleClick} class="btn btn-primary"  style={{marginTop: '1em', marginRight: '5em', paddingLeft:'2em', paddingRight:'2em'}}>
          Buscar
        </button>

      </Form>
      {characters !== null
        //Se imprimen los personajes.
        ? characters.map((character) => (
            <Card style={{ width: '15rem', padding:'1em', top: '1em', left: '1em', display: 'inline-flex', alignItems:'center', margin: '0.5em'}} key={character.id}>
                <Card.Title>{character.name}</Card.Title>
                <Card.Img variant="top" src={character.image} />
                <Card.Body>
                    <Button style={{padding: '0.75em'}} href={`/character/${character.id}`} variant="primary">Ver personaje</Button>
                </Card.Body>
            </Card>
          ))
        : "No hay personajes"}
    </>
  );
};

export default Index;
