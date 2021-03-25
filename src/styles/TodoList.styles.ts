import styled from 'styled-components'; 

export const List = styled.div`
    margin-top: 2rem;
    background-color: black;
    width: 500px;
    padding: 1rem 1rem;
    border-radius: 20px;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    input{
        margin-right: 1.2rem;
        outline: none;
    }

    label{
        font-size: 1.8rem;
    }

    div{
        padding-bottom: 0.5rem;
    }

`;
