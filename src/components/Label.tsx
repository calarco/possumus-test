import React from "react";
import styled, { css } from "styled-components";

import { Device } from "globalStyle";

type Props = {
    length?: number;
    loading?: boolean;
};

const Container = styled.div<Props>`
    position: relative;
    padding: 0.25rem 1rem;
    display: grid;
    gap: 0.25rem;
    transition: 0.2s ease-in;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        border-left: 1px solid var(--secondary);
        box-shadow: var(--shadow-secondary);
    }

    label {
        color: var(--on-background-variant);
    }

    p {
        padding: 0.25rem 0.5rem;
        color: var(--on-background);
        font: var(--body1);
        opacity: 1;
        transition: 0.2s ease-in;
    }

    ul {
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    ${(props) =>
        props.length &&
        css`
            @media ${Device.laptop} {
                grid-column-end: span ${props.length > 2 ? 2 : props.length};
            }

            @media ${Device.desktop} {
                grid-column-end: span ${props.length > 3 ? 3 : props.length};
            }

            ${props.length > 2 &&
            css`
                p {
                    text-align: justify;
                }
            `};
        `};

    ${(props) =>
        props.loading &&
        css`
            @keyframes loading {
                0% {
                    opacity: 0.4;
                }
                50% {
                    opacity: 0.8;
                }
                100% {
                    opacity: 0.4;
                }
            }
            animation-name: loading;
            animation-duration: 2s;
            animation-iteration-count: infinite;

            p {
                opacity: 0;
            }
        `};
`;

type ComponentProps = {
    label: string;
    length?: number;
    loading?: boolean;
    children: React.ReactNode;
};

function Label({ label, length, loading, children }: ComponentProps) {
    return (
        <Container length={length} loading={loading}>
            <label>{label}</label>
            {children}
        </Container>
    );
}

export default Label;
