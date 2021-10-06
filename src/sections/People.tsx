import { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { TransitionGroup } from "react-transition-group";
import transition from "styled-transition-group";

const Container = styled.section`
    height: 100vh;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
`;

const Item = transition.div.attrs({
    unmountOnExit: true,
    timeout: {
        enter: 300,
        exit: 200,
    },
})`
    transition: 0.15s ease-in;

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

const Link = styled(NavLink)`
    display: inline-block;
    width: 100%;
    padding: 1rem 1.5rem;
    text-decoration: none;
    color: var(--primary);
    text-shadow: var(--shadow-primary);
    transition: 0.15s ease-in;

    &:hover {
        cursor: pointer;
        background: var(--primary-variant);
        transition: 0.15s ease-out;
    }

    &:focus {
        background: none;
    }

    &.active {
        color: var(--secondary);
        pointer-events: none;
    }
`;

const Loading = styled.p`
    @keyframes loading {
        0% {
            opacity: 0.4;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0.4;
        }
    }

    padding: 2rem 0;
    text-align: center;
    animation-name: loading;
    animation-duration: 2s;
    animation-iteration-count: infinite;
`;

type ComponentProps = {
    setCurrent: (current: any) => void;
};

function People({ setCurrent }: ComponentProps) {
    const loader = useRef<HTMLDivElement | null>(null);
    const [loading, setLoading] = useState(true);
    const [people, setPeople] = useState([
        {
            name: "",
            height: "",
            mass: "",
            hair_color: "",
            skin_color: "",
            eye_color: "",
            birth_year: "",
            gender: "",
            homeworld: "",
            films: [""],
            species: [""],
            vehicles: [""],
            starships: [""],
            created: "",
            edited: "",
            url: "",
        },
    ]);
    const [next, setNext] = useState("https://swapi.dev/api/people/");

    const loadPeople = useCallback(() => {
        next !== "" &&
            axios.get(next).then((response) => {
                response.data.results &&
                    setPeople((people) => [
                        ...people,
                        ...response.data.results,
                    ]);
                response.data.next ? setNext(response.data.next) : setNext("");
                setLoading(false);
            });
    }, [next, setPeople]);

    const handleObserver = useCallback((entries) => {
        if (entries[0].isIntersecting) {
            setLoading(true);
        }
    }, []);

    useEffect(() => {
        const option = {
            root: null,
            rootMargin: "20px",
            threshold: 0,
        };
        loader.current &&
            new IntersectionObserver(handleObserver, option).observe(
                loader.current
            );
        // eslint-disable-next-line
    }, [loader.current, handleObserver]);

    useEffect(() => {
        loading && loadPeople();
    }, [loading, loadPeople]);

    return (
        <Container>
            <TransitionGroup component={null}>
                {people.map(
                    (item: {
                        name: string;
                        height: string;
                        mass: string;
                        hair_color: string;
                        skin_color: string;
                        eye_color: string;
                        birth_year: string;
                        gender: string;
                        homeworld: string;
                        films: string[];
                        species: string[];
                        vehicles: string[];
                        starships: string[];
                        created: string;
                        edited: string;
                        url: string;
                    }) =>
                        item.name !== "" && (
                            <Item key={item.name}>
                                <Link
                                    to={`/${item.url.split(/\//)[4]}/${
                                        item.url.split(/\//)[5]
                                    }`}
                                    onClick={() => setCurrent(item)}
                                >
                                    {item.name}
                                </Link>
                            </Item>
                        )
                )}
                {next !== "" && !loading && (
                    <Loading ref={loader}>Loading...</Loading>
                )}
            </TransitionGroup>
        </Container>
    );
}

export default People;
