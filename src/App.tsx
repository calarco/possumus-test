import React, { useState, useEffect, useCallback, useRef } from "react";
import styled from "styled-components";
import axios from "axios";

import GlobalStyle from "./globalStyle";

const Main = styled.main`
    width: 100vw;
    height: 100vh;
    overflow-y: overlay;
    display: grid;
`;

const List = styled.section`
    max-width: 30rem;
    height: 100%;
    overflow-y: overlay;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
`;

const Loading = styled.div`
    @keyframes loading {
        0% {
            opacity: 0.5;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0.5;
        }
    }

    padding: 2rem 0;
    text-align: center;
    animation-name: loading;
    animation-duration: 2s;
    animation-iteration-count: infinite;
`;

function App() {
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
                        ...response.data.results.filter(
                            (item: { name: string }, index: number) => {
                                return (
                                    response.data.results.findIndex(
                                        (test: { name: string }) =>
                                            test.name === item.name
                                    ) === index
                                );
                            }
                        ),
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
    }, [loader.current, handleObserver]);

    useEffect(() => {
        loading && loadPeople();
    }, [loading, loadPeople]);

    return (
        <>
            <GlobalStyle />
            <Main>
                <List>
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
                        }) => (
                            <h3 key={item.name}>{item.name}</h3>
                        )
                    )}
                    {next !== "" && !loading && (
                        <Loading ref={loader}>Loading...</Loading>
                    )}
                </List>
            </Main>
        </>
    );
}

export default App;
