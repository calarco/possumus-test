import React from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Arrow } from "back_arrow.svg";

import { Device } from "globalStyle";

type Props = {
    loading?: boolean;
};

const Container = styled.article<Props>`
    max-height: 100%;
    display: grid;
    grid-template-rows: auto 1fr;
    opacity: 1;
    transition: 0.2s ease-out;

    ${(props) =>
        props.loading &&
        css`
            opacity: 0.4;
            transition: 0.3s ease-in;
        `};
`;

const Header = styled.div`
    position: sticky;
    top: 0;
    width: 100%;
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;

    &::after {
        content: "";
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        border-bottom: 1px solid var(--secondary);
        box-shadow: var(--shadow-secondary);
    }

    button {
        position: relative;
        height: 4rem;
        width: 4rem;
        padding: 0.5rem;
        border-radius: 0;
        color: var(--secondary);

        &::after {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            border-right: 1px solid var(--secondary);
            box-shadow: var(--shadow-secondary);
        }

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
    overflow-y: auto;
    display: grid;
    align-content: start;
    align-items: start;
    grid-template-columns: 1fr;
    gap: 2rem;

    @media ${Device.laptop} {
        grid-template-columns: 1fr 1fr;
    }

    @media ${Device.desktop} {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

type ComponentProps = {
    title?: string;
    subtitle?: string;
    loading?: boolean;
    className?: string;
    children: React.ReactNode;
};

function Article({
    title,
    subtitle,
    loading,
    className,
    children,
}: ComponentProps) {
    const navigate = useNavigate();

    return (
        <Container loading={loading} className={className}>
            {title ? (
                <>
                    <Header>
                        <button
                            type="button"
                            onClick={() => navigate(-1)}
                            aria-label="Back"
                        >
                            <Arrow fill="var(--secondary)" />
                        </button>
                        <h3>{title}</h3>
                        {subtitle && <h4>{subtitle}</h4>}
                    </Header>
                    <Content>{children}</Content>
                </>
            ) : (
                children
            )}
        </Container>
    );
}

export default Article;
