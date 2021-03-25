import  {createGlobalStyle} from 'styled-components'; 

export const GlobalStyle = createGlobalStyle`
    html{
        height: 100%;
    }

    body{
        background-color: #12293f;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        height: 100%;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
    }

    #root{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

`;