import React from 'react';

// import { Container } from './styles';

function Chamada() {

    const chama = () => {return fetch("https://pokeapi.co/api/v2/pokemon/ditto")}
    
    const respostaServer = () => {return chama().then(response => response.json())}
    // .then(response => response.json())

    const dados = () => {return respostaServer().then(data => console.log(data))}
    // .then(data => {return data})

    console.log(dados())

  return (
    <h3>
        rodei chamada
    </h3>
    )
}

export default Chamada;