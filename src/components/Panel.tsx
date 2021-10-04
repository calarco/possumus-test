import React from "react";
import styled from "styled-components";

const Container = styled.article`
    max-height: 100%;
    display: grid;
    grid-template-rows: auto 1fr;

    h3 {
        position: sticky;
        top: 0;
        width: 100%;
        padding: 1rem 1.5rem;
        border-bottom: 1px solid var(--secondary);
        color: var(--secondary);
    }

    > div {
        padding: 2rem;
        overflow-y: overlay;
        display: grid;
        align-content: start;
        align-items: start;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 2rem;
    }
`;

type ComponentProps = {
    title: string;
    children: React.ReactNode;
};

function Panel({ title, children }: ComponentProps) {
    return (
        <Container>
            <h3>{title}</h3>
            <div>{children}</div>
        </Container>
    );
}

export default Panel;
