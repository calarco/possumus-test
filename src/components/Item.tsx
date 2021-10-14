import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { css } from "styled-components";
import transition from "styled-transition-group";
import { SwitchTransition } from "react-transition-group";

import useAxios from "components/useAxios";

type Props = {
    loading?: boolean;
};

const Container = transition.li.attrs({
    unmountOnExit: true,
    timeout: {
        enter: 300,
        exit: 200,
    },
})<Props>`
    position: relative;

    &:not(:last-child)::after {
        content: "";
        position: absolute;
        top: calc(50% - 0.5rem);
        right: -0.5rem;
        height: 1rem;
        border-right: 2px solid var(--primary-variant);
    }

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
        `};

    &:enter {
        opacity: 0;
        transform: scale(0.95);
    }

    &:enter-active {
        opacity: 1;
        transform: initial;
        transition: 0.3s ease-out;
        
    }

    &:exit {
        opacity: 1;
    }

    &:exit-active {
        opacity: 0;
        transition: 0.2s ease-in;
    }
`;

type ComponentProps = {
    url: string;
    setCurrent: (current: any) => void;
    className?: string;
};

function Item({ url, setCurrent, className }: ComponentProps) {
    const [data, setData] = useState<Data>({
        created: "",
        edited: "",
        url: "",
    });
    const { response, loading, error } = useAxios({
        url: `/${url?.split(/\//)[4]}/${url?.split(/\//)[5]}`,
        dontLoad: false,
    });

    useEffect(() => {
        setData(response);
    }, [response, setData]);

    return (
        <SwitchTransition>
            <Container
                key={loading ? 0 : error !== "" ? 1 : 2}
                className={className}
                loading={loading}
            >
                {loading ? (
                    <button type="button">_</button>
                ) : error !== "" ? (
                    <button type="button">{error}</button>
                ) : (
                    <Link
                        to={`/${data.url?.split(/\//)[4]}/${
                            data.url?.split(/\//)[5]
                        }`}
                        onClick={() => setCurrent(data)}
                    >
                        {data.name || data.title}
                    </Link>
                )}
            </Container>
        </SwitchTransition>
    );
}

export default Item;
