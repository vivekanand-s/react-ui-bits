import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

    html {
        height: 100%;
    }

    body {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        font-family: 'Roboto';
        background-attachment: fixed;
        background-repeat: no-repeat;
    }
    ::placeholder { /* Firefox, Chrome, Opera */ 
        color: #cccccc; 
    } 

    div, li, span {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /* clears the 'X' from Internet Explorer */
    input[type=search]::-ms-clear {  display: none; width : 0; height: 0; }
    input[type=search]::-ms-reveal {  display: none; width : 0; height: 0; }

    /* clears the 'X' from Chrome */
    input[type="search"]::-webkit-search-decoration,
    input[type="search"]::-webkit-search-cancel-button,
    input[type="search"]::-webkit-search-results-button,
    input[type="search"]::-webkit-search-results-decoration { display: none; }

`

export default GlobalStyles