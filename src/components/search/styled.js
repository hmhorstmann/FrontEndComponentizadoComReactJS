import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 100%;
    padding: 4px;
    input {
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 4px; 8px;
    }
    button {
        width: 50%;
        align-self: center;
        margin: 8px;
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 0 8px;

        &:hover {            
            box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.5);
            span {
                font-weight: bold;
            }
        }
        }

        
`