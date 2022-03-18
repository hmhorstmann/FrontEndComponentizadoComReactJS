import React from 'react'
import * as S from './styled'
import Search from '../search'

const Layout = ({ children }) => {
    return (
      <S.ContainerLayout>
        <Search />
        {children}
      </S.ContainerLayout>
    )
}

export default Layout