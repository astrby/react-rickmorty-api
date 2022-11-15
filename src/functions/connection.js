import axios from 'axios'

//Funciones con Axios para obtener datos desde la Api.
const allCharacters = async(state) => {
    const peticion = await axios.get('https://rickandmortyapi.com/api/character')
    state(peticion.data.results)
}

const oneCharacter = async(id, state) => {
    const peticion = await axios.get('https://rickandmortyapi.com/api/character/'+id)
    state(peticion.data)
}

//Se exportan las funciones para poder utilizarlas.
export{
    allCharacters,
    oneCharacter
}