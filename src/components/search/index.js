import React, { useState } from 'react'
import * as S from './styled'
import usePoke from '../../hooks/poke-hooks'

const Search = () => {

    const { getPokemon } = usePoke()
    const [pokemonForSearch, setPokemonForSearch] = useState("")

    const submitGetPokemon = () => {
        if (!pokemonForSearch) return;
        return getPokemon(pokemonForSearch)
    }

    return (
        <S.Container>
            <input type="text" placeholder='{Nome ou Número} do Pokemon' onChange={(event) => {setPokemonForSearch(event.target.value.toLowerCase())}} />
            <button type="submit" onClick={submitGetPokemon} ><span>dex</span></button>
        </S.Container>
    )
}

export default Search;