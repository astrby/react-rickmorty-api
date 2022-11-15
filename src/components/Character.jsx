import React, {useEffect, useState} from 'react'
import Card from 'react-bootstrap/Card';
import Text from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import {useParams} from 'react-router-dom'
import {oneCharacter} from '../functions/connection'

const Character = () => {

const [character, setCharacter] = useState(null)
const params = useParams()

useEffect(()=>{
  oneCharacter(params.id, setCharacter)
})

  return (
    <>
    <Button href={`/`} style={{marginLeft: '1em', marginTop: '1em', paddingLeft: '1em',paddingRight: '1em'}}>
      Atrás
    </Button>
      {character !== null ? (
          <Card style={{width: '25rem', padding:'1em', top: '1em', alignItems:'center', left:'0', right:'0',top:'5em', margin: 'auto'}} key={character.id}>
          <h2 style={{marginBottom:'1em'}}>{character.name}</h2>
          <Card.Img variant="top" src={character.image} />
          <Card.Body style={{marginTop:'1em'}}>
              <Text style={{backgroundColor:'white', color: 'black', paddingLeft:'0.5em', paddingRight:'0.5em', fontWeight: 'bold'}}>Status: {character.status}</Text>
              <Text style={{backgroundColor:'white', color: 'black', paddingLeft:'0.5em', paddingRight:'0.5em', fontWeight: 'bold'}}>Especie: {character.species}</Text>
              <Text style={{backgroundColor:'white', color: 'black', paddingLeft:'0.5em', paddingRight:'0.5em', fontWeight: 'bold'}}>Género: {character.gender}</Text>
              <Text style={{backgroundColor:'white', color: 'black', paddingLeft:'0.5em', paddingRight:'0.5em', fontWeight: 'bold'}}>Origen: {character.origin.name}</Text>
          </Card.Body>
    </Card>
      ): ('No hay personajes')}
    </>
  )
}

export default Character