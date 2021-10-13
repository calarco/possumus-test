import { useEffect } from "react";
import { Location } from "history";
import { css } from "styled-components";
import { SwitchTransition, TransitionGroup } from "react-transition-group";
import transition from "styled-transition-group";

import { Device } from "globalStyle";
import useAxios from "components/useAxios";
import ArticleComponent from "components/Article";
import Person from "sections/Person";
import Planet from "sections/Planet";
import Film from "sections/Film";
import Specie from "sections/Specie";
import Vehicle from "sections/Vehicle";
import Starship from "sections/Starship";

type Props = {
    home?: boolean;
};

const Container = transition.div.attrs({
    unmountOnExit: true,
    timeout: {
        enter: 300,
        exit: 200,
    },
})<Props>`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 1;
    transition: 0.3s ease-out;

    @media ${Device.laptop} {
        position: relative;
        margin: 2rem;
    }

    ${(props) =>
        !props.home &&
        css`
            overflow: hidden;
            background: var(--secondary-variant);
            backdrop-filter: blur(1rem) saturate(0);

            @media ${Device.laptop} {
                border-radius: 2px;
                border: 1px solid var(--secondary);
                box-shadow: var(--shadow-secondary);
                backdrop-filter: none;
            }
        `}

    ${(props) =>
        props.home &&
        css`
            visibility: hidden;
            opacity: 0;
            display: grid;
            align-content: center;
            justify-items: center;
            gap: 1rem;

            @media ${Device.laptop} {
                visibility: visible;
                opacity: 1;
            }

            h3 {
                color: var(--on-background-variant);
            }
        `};

    &:enter {
        opacity: 0;
        transform: translateY(-1rem);
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
        transform: translateY(-1rem);
        transition: 0.2s ease-in;
    }
`;

const Article = transition(ArticleComponent).attrs({
    unmountOnExit: true,
    timeout: {
        enter: 300,
        exit: 200,
    },
})`
    position: absolute;
    top: 1px;
    right: 1px;
    bottom: 1px;
    left: 1px;

    &:enter {
        opacity: 0;
        transform: translateX(-1rem);
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
    location: Location;
    current: Data;
    setCurrent: (current: any) => void;
};

function Routes({ location, current, setCurrent }: ComponentProps) {
    const { response, loading } = useAxios({
        url: location.pathname,
        dontLoad:
            `/${current.url?.split(/\//)[4]}/${current.url?.split(/\//)[5]}` ===
            location.pathname
                ? true
                : false,
    });

    useEffect(() => {
        setCurrent(response);
    }, [response, setCurrent]);

    return (
        <SwitchTransition>
            {location.pathname === "/" ? (
                <Container key={0} home={true}>
                    <h1>Star Wars</h1>
                    <h3>database</h3>
                </Container>
            ) : (
                <Container key={1} home={false}>
                    <TransitionGroup component={null}>
                        <Article
                            key={current.url}
                            title={current.name || current.title}
                            subtitle={
                                current.episode_id
                                    ? `Episode ${current.episode_id}`
                                    : undefined
                            }
                            loading={loading}
                        >
                            {current.url?.split(/\//)[4] === "people" ? (
                                <Person
                                    data={current}
                                    setCurrent={setCurrent}
                                />
                            ) : current.url?.split(/\//)[4] === "planets" ? (
                                <Planet
                                    data={current}
                                    setCurrent={setCurrent}
                                />
                            ) : current.url?.split(/\//)[4] === "films" ? (
                                <Film data={current} setCurrent={setCurrent} />
                            ) : current.url?.split(/\//)[4] === "species" ? (
                                <Specie
                                    data={current}
                                    setCurrent={setCurrent}
                                />
                            ) : current.url?.split(/\//)[4] === "vehicles" ? (
                                <Vehicle
                                    data={current}
                                    setCurrent={setCurrent}
                                />
                            ) : current.url?.split(/\//)[4] === "starships" ? (
                                <Starship
                                    data={current}
                                    setCurrent={setCurrent}
                                />
                            ) : undefined}
                        </Article>
                    </TransitionGroup>
                </Container>
            )}
        </SwitchTransition>
    );
}

export default Routes;
