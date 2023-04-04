import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    body {
        background: #fff;
        font-family: "Poppins", Arial, Helvetica, sans-serif;
        overflow-y: hidden;
    }

    body::-webkit-scrollbar {
        display: none;
    }
`