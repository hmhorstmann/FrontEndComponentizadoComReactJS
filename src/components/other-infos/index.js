import React from 'react'
import usePoke from '../../hooks/poke-hooks'
import * as S from './styled'

const OtherInfos = () => {
    const { pokeState } = usePoke()

    return (
        <S.ContainerOther>
            {/* <h3>Other Infos</h3> */}
            <S.ContainerInfos>
                <S.ContainerTabs
                    selectedTabClassName='is-selected'
                    selectedTabPanelClassName='is-selected'
                >
                    <S.ContainerTabList>
                        <S.ContainerTab>Height</S.ContainerTab>
                        <S.ContainerTab>Weight</S.ContainerTab>
                    </S.ContainerTabList>

                    <S.ContainerTabPanel>
                        <S.ContainerTabList>
                            <>
                                {pokeState.pokemon.height/10} m
                            </>
                        </S.ContainerTabList>
                    </S.ContainerTabPanel>
                    <S.ContainerTabPanel>
                        <S.ContainerTabList>
                            <>
                                {pokeState.pokemon.weight/10} kg
                            </>
                        </S.ContainerTabList>
                    </S.ContainerTabPanel>

                </S.ContainerTabs>
            </S.ContainerInfos>
        </S.ContainerOther>
    )
}

export default OtherInfos


// import React, { useEffect, useState } from 'react'
// import usePoke from '../../hooks/poke-hooks'
// import * as S from './styled'

// const OtherInfos = () => {
//     const { pokeState, getPokemon } = usePoke()
//     const [hasPokeForSearcher, setHasPokeForSearcher] = useState(false)

//     useEffect(() => {
//         if (pokeState.pokemon.height) {
//             getPokemon(pokeState.pokemon.order)
//         }
//         setHasPokeForSearcher(pokeState.height)
//     }, [pokeState.pokemon.order])

//     return (
//         <>
//             {hasPokeForSearcher ? (
//                 <S.ContainerOther>
//                     <h3>Other Infos</h3>
//                     <S.ContainerInfos>
//                         <S.ContainerTabs
//                             selectedTabClassName='is-selected'
//                             selectedTabPanelClassName='is-selected'
//                         >
//                             <S.ContainerTabList>
//                                 <S.ContainerTab>Height</S.ContainerTab>
//                                 <S.ContainerTab>Weight</S.ContainerTab>
//                             </S.ContainerTabList>

//                             <S.ContainerTabPanel>
//                                 <S.ContainerTabList>
//                                     {pokeState.pokemon.height}
//                                 </S.ContainerTabList>
//                             </S.ContainerTabPanel>

//                             <S.ContainerTabPanel>
//                                 <S.ContainerTabList>
//                                     {pokeState.pokemon.weight}
//                                 </S.ContainerTabList>
//                             </S.ContainerTabPanel>

//                         </S.ContainerTabs>
//                     </S.ContainerInfos>
//                 </S.ContainerOther>
//             ) : (
//                 <></>
//             )}
//         </>
//     )
// }

// export default OtherInfos