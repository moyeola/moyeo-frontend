import { createGlobalStyle } from "styled-components";
import { cssVariables } from ".";

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Inter", 'Noto Sans KR', -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
        -webkit-tap-highlight-color : transparent;
    }

    :root {
        ${cssVariables}
        transition: 0.125s all ease-in;
        scroll-padding-top: 64px;

        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        touch-action: manipulation;

        color: var(--text1);
        font-size: var(--fontSize400);
    }

    body {
        background-color: var(--gray07);
        color: var(--gray01);
    }

    a {
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
`;
