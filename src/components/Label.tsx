import React from "react";
import styled, { css } from "styled-components";

type Props = {
    readonly length?: number;
};

const Container = styled.div<Props>`
    position: relative;
    padding: 0.25rem 1rem;
    display: grid;
    gap: 0.25rem;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        border-left: 1px solid var(--secondary);
    }

    ${(props) =>
        props.length &&
        css`
            grid-column-end: span ${props.length > 3 ? 3 : props.length};
        `};

    label {
        text-transform: uppercase;
        font-weight: 600;
        color: var(--on-background-variant);
    }

    p {
        padding: 0.25rem 0.5rem;
        color: var(--on-background);
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
