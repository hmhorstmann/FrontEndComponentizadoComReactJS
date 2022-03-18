import styled from 'styled-components'

export const Container = styled.div`
    width: 300px;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: 1px solid black;
    border-bottom: none;
    background: black;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    h3 {
        width:60%;
        border-radius: 20px;;
        padding: 5px;
        background:pink;
        color: white;
        background:black;
    }

    a {
        width:50%;
    }
`

export const ContainerTitle = styled.div`
margin-top: 6px;
    padding: 0.5% 0;
    h1, h2 {
        font-size: 2rem;
        font-weight: bold;
    }
    width: 96%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: yellow;
    border: 1px solid yellow;
    border-radius: 10px;
    `
    
    export const ContainerImage = styled.img`
    margin: 5% 0 5%;
    width: 100%;
    border: 2px solid white;
    border-radius: 20%;
    `

export const ContainerTypes = styled.div`
border-radius: 30%;

    font-size: 1.5rem;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const ContainerTypesInfos = styled.div`

border-radius: 50%;
    font-weight: bold;
    font-size: 1.25rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: white;
`

