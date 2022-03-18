import React from 'react'
import usePoke from '../../hooks/poke-hooks'
import * as S from "./styled";

const EffectivityItem = ({ name, key }) => {
    const { pokeState } = usePoke()
    // console.log("testee0", pokeState)
    // console.log("testee1", pokeState.pokeTypesApi.map(item => (item)))
    // console.log("testee2", pokeState.pokeTypesApi.map(item => (item.damage_relations.double_damage_from.map(second => second.name))))

    return (
        <S.ContainerItem key={key}>
            {name}
        </S.ContainerItem>
    )
}

export default EffectivityItem;