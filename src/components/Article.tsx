import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { ReactComponent as Arrow } from "back_arrow.svg";

import { Device } from "globalStyle";

const Container = styled.article`
    max-height: 100%;
    display: grid;
    grid-template-rows: auto 1fr;
    opacity: 1;
    transition: 0.3s ease-out;
`;

const Header = styled.div`
    position: sticky;
    top: 0;
    width: 100%;
    border-bottom: 1px solid var(--secondary);
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;

    button {
        height: 4rem;
        width: 4rem;
        padding: 0.5rem;
        border-radius: 0;
        color: var(--secondary);
        border-right: 1px solid var(--secondary);

        svg {
            height: 3rem;
            width: 3rem;
            filter: drop-shadow(var(--shadow-secondary));
        }
    }

    h3,
    h4 {
        padding: 0 1.5rem;
        color: var(--secondary);
        text-shadow: var(--shadow-secondary);
    }
`;

const Content = styled.div`
    padding: 2rem;
    overflow-y: scroll;
    display: grid;
    align-content: start;
    align-items: start;
    grid-template-columns: 1fr;
    gap: 2rem;

    @media ${Device.laptop} {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

type ComponentProps = {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
};

function Article({ title, subtitle, children }: ComponentProps) {
    let history = useHistory();

    return (
        <Container>
            <Header>
                <button
                    type="button"
                    onClick={() => history.goBack()}
                    aria-label="Back"
                >
                    <Arrow fill="var(--secondary)" />
                </button>
                <h3>{title}</h3>
                {subtitle && <h4>{subtitle}</h4>}
            </Header>
            <Content>{children}</Content>
        </Container>
    );
}

export default Article;
