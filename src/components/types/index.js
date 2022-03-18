import React from 'react'
// import * as S from "./styled"
import usePoke from '../../hooks/poke-hooks'

const Types = ({ name }) => {

  const { pokeState } = usePoke()

    return (
        <>
            {pokeState.pokemon.types.map(item => (
                <h4 key={item.slot}>
                    {item.type.name}
                </h4>
            ))}
        </>
    )
}

export default Types
