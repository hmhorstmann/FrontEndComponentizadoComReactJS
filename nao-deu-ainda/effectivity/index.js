import React from 'react'
import usePoke from '../../hooks/poke-hooks'
import * as S from './styled'
import EffectivityItem from '../effectivity-item'
import EffectivityTitleItem from '../effectivity-title-item'

const Effectivity = () => {

  const { pokeState } = usePoke()
  console.log(pokeState.pokeTypesApi)
  // useEffect(() => {
  // },[pokeState])




  return (
    // <>
    //   {hasPokeForSearcher ? (
    <S.ContainerTypes>
      <h3>Types</h3>
      <S.ContainerTypesInfos>
        <S.ContainerTabs
          selectedTabClassName='is-selected'
          selectedTabPanelClassName='is-selected'
        >
          <S.ContainerTabList>
            {pokeState.pokemon.types.map(item => (
              <S.ContainerTab
                key={item.slot}
              >
                <EffectivityTitleItem
                  name={item.type.name}
                >
                </EffectivityTitleItem>
              </S.ContainerTab>
            ))}
          </S.ContainerTabList>
          {pokeState.pokemon.types.map(item => (
            <S.ContainerTabPanel
              key={item.slot} >
              <S.ContainerTabList>
                <h4>Double Damage From: </h4>
                {pokeState.pokeTypesApi.map(item => (item.damage_relations.double_damage_from.map(second => (
                  <EffectivityItem key={item.id} name={second.name}/>
                ))))}
              </S.ContainerTabList>
            </S.ContainerTabPanel>
          ))}
        </S.ContainerTabs>
      </S.ContainerTypesInfos>
    </S.ContainerTypes>
    //     ) : ( <></>
    //  )}
    //   </>
  )
}

export default Effectivity;

//-----------------------

// import React/*, { useEffect, useState } */ from 'react'
// import usePoke from '../../hooks/poke-hooks'
// import * as S from './styled'
// import EffectivityItem from '../effectivy-item'

// const Effectivity = () => {
//   const { pokeState, getPokemon } = usePoke()
//   console.log(pokeState.pokemon.types)


//   return (
//     // <>
//     //   {hasPokeForSearcher ? (
//     <S.ContainerTypes>
//       <h3>Types</h3>
//       <S.ContainerTypesInfos>
//         <S.ContainerTabs
//           selectedTabClassName='is-selected'
//           selectedTabPanelClassName='is-selected'
//         >
//           <S.ContainerTabList>
//             <S.ContainerTab>{pokeState.pokemon.types.map(item => (
//               <EffectivityItem
//                 key={item.slot}
//                 name={item.type.name}
//                 // link=
//               />
//             ))}</S.ContainerTab>
//             <S.ContainerTab>{pokeState.pokemon.types.name}</S.ContainerTab>
//           </S.ContainerTabList>
//           <S.ContainerTabPanel>
//             <S.ContainerTabList>
//               <EffectivityItem name='repo1' atrib='2' />
//             </S.ContainerTabList>
//           </S.ContainerTabPanel>
//           <S.ContainerTabPanel>
//             <S.ContainerTabList>
//               <EffectivityItem name='repo2' atrib='4' />
//             </S.ContainerTabList>
//           </S.ContainerTabPanel>
//         </S.ContainerTabs>
//       </S.ContainerTypesInfos>
//     </S.ContainerTypes>
//     //     ) : ( <></>
//     //  )}
//     //   </>
//   )
// }

// export default Effectivity;


// --------------------------------

// import React, { useEffect, useState } from 'react'
// import usePoke from '../../hooks/poke-hooks'
// import * as S from './styled'
// import EffectivityItem from '../effectivy-item'

// const Effectivity = () => {
//   // const { pokeState, getPokemon } = usePoke()
//   // const [hasPokeForSearcher, setHasPokeForSearcher] = useState(false)

//   // useEffect(() => {
//   //   if(!!pokeState.pokemon.name){
//   //     getPokemon()
//   //   }
//   //     setHasPokeForSearcher(!pokeState.pokemon)
//   // }, [pokeState.pokemon])
//   return (
//     // <>
//     //   {hasPokeForSearcher ? (
//       <S.ContainerTypes>
//         <h3>Types</h3>
//         <S.ContainerTypesInfos>
//           <S.ContainerTabs
//             selectedTabClassName='is-selected'
//             selectedTabPanelClassName='is-selected'
//           >
//             <S.ContainerTabList>
//               <S.ContainerTab>pokeState.types[0].name</S.ContainerTab>
//               <S.ContainerTab>pokeState.types</S.ContainerTab>
//             </S.ContainerTabList>
//             <S.ContainerTabPanel>
//               <S.ContainerTabList>
//                 <EffectivityItem name='repo1' atrib='2' />
//               </S.ContainerTabList>
//             </S.ContainerTabPanel>
//             <S.ContainerTabPanel>
//               <S.ContainerTabList>
//                 <EffectivityItem name='repo2' atrib='4' />
//               </S.ContainerTabList>
//             </S.ContainerTabPanel>
//           </S.ContainerTabs>
//         </S.ContainerTypesInfos>
//       </S.ContainerTypes>
//   //     ) : ( <></>
//   //  )}
//   //   </>
//   )
// }

// export default Effectivity;