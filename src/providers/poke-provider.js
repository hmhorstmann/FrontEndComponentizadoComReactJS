import React, { createContext, useState, useCallback } from 'react'
import api from "../services/api"

export const PokeContext = createContext({
    loading: false,
    pokemon: {

    },
    types: [],
})

const PokeProvider = ({ children }) => {
    const [pokeState, setPokeState] = useState({
        hasPoke: false,
        loading: false,
        pokemon: {
            name: undefined,
            id: undefined,
            height: 0,
            weight: 0,
            order: undefined,
            sprites: {
                other: {
                    dreamWorld: {
                        frontDefault: undefined,
                    },
                    officialArtwork: {
                        frontDefault: undefined,
                    },
                }
            },
            types: [],
        },
        pokeTypesApi: {},
    })
    
    
    const getPokemon = async (pokemon) => {
        setPokeState((prevState) => ({
            ...prevState,
            loading: !prevState.loading,
        }))
        

        // fazendo uma segunda busca em outra api, apartir de infos retiradas na primeira pesquisa
        const {data} = await api        
            .get(`pokemon/${pokemon}`)

            const pokemonTypes = []

            for(let item of data.types) {
                const respostaapi2 = await api.get(`type/${item.type.name}`)
                pokemonTypes.push(respostaapi2.data)
            }

            setPokeState(prevState => ({
                            ...prevState,
                            loading: false,
                            hasPoke: true,
                            pokemon: {
                                name: data.name,
                                id: data.id,
                                height: data.height,
                                weight: data.weight,
                                order: data.order,
                                sprites: {
                                    other: {
                                        dreamWorld: {
                                            frontDefault: data.sprites.other.dream_world.front_default,
                                        },
                                        officialArtwork: {
                                            // frontDefault: data.sprites.other.official-artwork.front_default,
                                        },
                                    }
                                },
                                types: data.types,
                            },
                            pokeTypesApi: pokemonTypes,
                        }))

            
        // api
        // .get(`pokemon/${pokemon}`)
        // .then(({ data }) => {
            //         setPokeState(prevState => ({
        //             ...prevState,
        //             hasPoke: true,
        //             pokemon: {
        //                 name: data.name,
        //                 id: data.id,
        //                 sprites: {
        //                     other: {
        //                         dreamWorld: {
        //                             frontDefault: data.sprites.other.dream_world.front_default,
        //                         }
        //                     }
        //                 },
        //                 types: data.types,
        //             }
        //         }))
        //     }).finally(() => {
        //         setPokeState((prevState) => ({
        //             ...prevState,
        //             loading: !prevState.loading,
        //         }))
        //     })
    }


    const contextValue = {
        pokeState,
        getPokemon: useCallback((pokemon) => getPokemon(pokemon), [])
        // getPokeType: usaCallback((type) => getPokemon(type), [])
    }

    return (
        <PokeContext.Provider value={contextValue}>
            {children}
        </PokeContext.Provider>
    )
}

export default PokeProvider