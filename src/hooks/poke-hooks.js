import { useContext } from 'react'
import { PokeContext } from '../providers/poke-provider'

const usePoke = () => {
    const { pokeState, getPokemon } = useContext(PokeContext)

    return { pokeState, getPokemon }
}

export default usePoke