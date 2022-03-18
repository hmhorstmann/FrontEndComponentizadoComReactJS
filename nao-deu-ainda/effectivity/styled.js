import styled from 'styled-components'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'


export const ContainerTypes = styled.div`
    font-size: 1.5rem;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const ContainerTypesInfos = styled.div`
    width: 100%;
    align-items: center;
    justify-content: center;
`

export const ContainerTabs = styled(Tabs)`
    margin:10px 0 10px;;
    width: 100%;
    font-size: 1.25rem;
    font-weight: bold;
`

export const ContainerTabList = styled(TabList)`
    width:100%;
    display: flex;
    justify-content: space-around;
    
`


export const ContainerTab = styled(Tab)`
    border-radius: 15%;
    border: 1px solid black;
    padding: 1% 4%;
    margin-bottom: 2%;
    user-select: none;
    cursor: pointer;
    z-index: 1000;

    &:focus {
        outline: none;
    }

    &.is-selected {
        box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.5);
    }
`


export const ContainerTabPanel = styled(TabPanel)`
    display: none;
    padding: 2%;
    border: 1px solid black;
    box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.5);
    justify-content: center;

    &.is-selected {
        display: flex;
        background: yellow;
    }
`
