import React, { useEffect } from 'react'
import * as S from './styled'
import usePoke from '../../hooks/poke-hooks'
import Types from '../types'

const Profile = () => {
    const { pokeState } = usePoke()

    useEffect(() => {
        console.log(pokeState.pokemon)
    }, [pokeState])
    return (
        <S.Container>
            <S.ContainerTitle>
                <h1>{pokeState.pokemon.name.charAt(0).toUpperCase() + pokeState.pokemon.name.slice(1)}</h1>
                <h2>#{("000" + pokeState.pokemon.id).slice(-3)}</h2>
            </S.ContainerTitle>
            <a href={`https://bulbapedia.bulbagarden.net/wiki/${pokeState.pokemon.name}_(Pok%C3%A9mon)`} target="_blank" rel="noreferrer"><S.ContainerImage src={pokeState.pokemon.sprites.other.officialArtwork.frontDefault} alt="Avatar Poke" /></a>
            {/* https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png
            https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg*/}
            <S.ContainerTypes>
                <h3>Types</h3>
                <S.ContainerTypesInfos>
                    <Types />
                </S.ContainerTypesInfos>
            </S.ContainerTypes>

        </S.Container>
    )
}

export default Profile