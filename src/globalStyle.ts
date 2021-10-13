import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const Device = {
    laptop: `(min-width: 1024px)`,
    desktop: `(min-width: 1440px)`,
};

const GlobalStyle = createGlobalStyle`
    ${normalize}

    ::-webkit-scrollbar {
        width: 0.25rem;
        height: 0.25rem;
    }

    ::-webkit-scrollbar-track {
        background: var(--secondary-variant);
    }

    ::-webkit-scrollbar-thumb {
        background: var(--secondary);
    }

    ::-webkit-scrollbar-thumb:hover {
        background: var(--primary);
    }

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
        --primary: rgba(29, 142, 182, 1);
        --primary-variant: rgba(29, 142, 182, 0.2);
        --secondary: rgba(91, 174, 84, 1);
        --secondary-variant: rgba(91, 174, 84, 0.1);
        --on-background: rgba(255, 255, 255, 0.8);
        --on-background-variant: rgba(255, 255, 255, 0.6);

        --shadow-primary: 0 0 0.5rem var(--primary);
        --shadow-secondary: 0 0 0.5rem var(--secondary);

        --font-family: "ShareTechMono-Regular";
        --font-family-alt: "SpaceMono-Bold";

        --label: 400 0.75rem/1.25rem var(--font-family-alt);
        --body1: 400 0.9rem/1.25rem var(--font-family);
        --body2: 400 0.9rem/1.5rem var(--font-family);
        --subhead1: 400 1rem/1.5rem var(--font-family);
        --subhead2: 400 1rem/1.75rem var(--font-family);
        --title: 700 1.25rem/1.75rem var(--font-family-alt);
        --headline: 400 1.5rem/2rem var(--font-family);
        --display-1: 400 2rem/2.5rem var(--font-family);

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

    button, a {
        display: inline-block;
        padding: 0.25rem 0.5rem;
        margin: 0;
        border-radius: 4px;
        background: none;
        border: none;
        color: var(--primary);
        text-shadow: var(--shadow-primary);
        font: var(--body1);
        text-decoration: none;
        text-align: center;
        transition: 0.15s ease-in;

        &:hover {
            cursor: pointer;
            background: var(--primary-variant);
            transition: 0.15s ease-out;
        }
    }
`;

export default GlobalStyle;
