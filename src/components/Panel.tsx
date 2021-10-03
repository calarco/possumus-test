import styled from "styled-components";

const Panel = styled.article`
    padding: 1rem 1.5rem;
    overflow: scroll;
    display: grid;
    align-content: start;
    align-items: start;
    grid-template-columns: 1fr 1fr 1fr;

    h3 {
        grid-column-end: span 3;
    }

    label {
        color: var(--secondary);
        text-transform: uppercase;
    }

    p {
        color: var(--on-background);
        text-transform: capitalize;
    }
`;

export default Panel;
