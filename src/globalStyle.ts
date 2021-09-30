import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const Device = {
    laptop: `(min-width: 1024px)`,
    desktop: `(min-width: 1440px)`,
};

const GlobalStyle = createGlobalStyle`
    ${normalize}

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    #root, html, body {
        height: 100vh;
    }

    html {
        font-size: 16px;
	    scroll-behavior: smooth;
    }
    
    body {
        --primary: #096ef7;
        --primary-variant: rgba(0, 0, 255, 0.2);
        --secondary: #f5c20c;
        --secondary-variant: #7cdf92;
        --on-background: rgba(255, 255, 255, 0.8);

        --font-family: "Sans";

        --label: 300 0.75rem/1.25rem var(--font-family);
        --body1: 300 0.9rem/1.25rem var(--font-family);
        --body2: 500 0.9rem/1.5rem var(--font-family);
        --subhead1: 300 1rem/1.5rem var(--font-family);
        --subhead2: 500 1rem/1.75rem var(--font-family);
        --title: 500 1.25rem/1.75rem var(--font-family);
        --headline: 300 1.5rem/2rem var(--font-family);
        --display-1: 300 2rem/2.5rem var(--font-family);

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
        font-feature-settings: "kern" 1;
        font-kerning: normal;
        background: #000;
        color: var(--on-background);
    }

    p,
    h6,
    h5,
    h4,
    h3,
    h2,
    h1,
    label {
        display: inline-block;
        margin: 0;
    }

    p, a {
        font: var(--body1);

        &::before {
            content: '';
            display: inline-block;
            height: 0;
            width: 0;
            margin-top: calc((1 - 1.25) * 0.5em);
        }
    }

    h6 {
        font: var(--body2);

        &::before {
            content: '';
            display: inline-block;
            height: 0;
            width: 0;
            margin-top: calc((1 - 1.5) * 0.5em);
        }
    }

    h5 {
        font: var(--subhead1);

        &::before {
            content: '';
            display: inline-block;
            height: 0;
            width: 0;
            margin-top: calc((1 - 1.5) * 0.5em);
        }
    }

    h4 {
        font: var(--subhead2);

        &::before {
            content: '';
            display: inline-block;
            height: 0;
            width: 0;
            margin-top: calc((1 - 2.25) * 0.5em);
        }
    }

    h3 {
        font: var(--title);

        &::before {
            content: '';
            display: inline-block;
            height: 0;
            width: 0;
            margin-top: calc((1 - 2.25) * 0.5em);
        }
    }

    h2 {
        font: var(--headline);

        &::before {
            content: '';
            display: inline-block;
            height: 0;
            width: 0;
            margin-top: calc((1 - 2) * 0.5em);
        }
    }

    h1 {
        font: var(--display-1);
        text-align: center;

        &::before {
            content: '';
            display: inline-block;
            height: 0;
            width: 0;
            margin-top: calc((1 - 2.5) * 0.5em);
        }
    }

    label {
        font: var(--label);
    }

    b {
        font-weight: 500;
    }

    button {
        transition: 0.15s ease-in-out;
    }

    button:hover {
        cursor: pointer;
    }
`;

export default GlobalStyle;