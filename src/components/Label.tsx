import styled, { css } from "styled-components";

type Props = {
    readonly length?: number;
};

const Container = styled.div<Props>`
    padding: 1rem 1.5rem;
    display: grid;

    ${(props) =>
        props.length &&
        css`
            grid-column-end: span ${props.length > 3 ? 3 : props.length};
        `};

    label {
        color: var(--secondary);
        text-transform: uppercase;
    }

    p,
    li {
        color: var(--on-background);
        text-transform: capitalize;
        font: var(--body1);
    }

    ul {
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }
`;

type ComponentProps = {
    label: string;
    length?: number;
    children: React.ReactNode;
};

function Label({ label, length, children }: ComponentProps) {
    return (
        <Container length={length}>
            <label>{label}</label>
            {children}
        </Container>
    );
}

export default Label;
