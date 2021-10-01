import React, { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    NavLink,
} from "react-router-dom";
import styled from "styled-components";

import GlobalStyle from "./globalStyle";
import Details from "./Details";

const Main = styled.main`
    width: 100vw;
    height: 100vh;
    overflow-y: hidden;
    display: grid;
    grid-template-columns: 20rem 1fr 1fr;
    justify-content: center;
`;

const List = styled.section`
    height: 100vh;
    overflow-y: overlay;
    display: flex;
    flex-direction: column;
`;

const Item = styled(NavLink)`
    padding: 1rem 1.5rem;
    text-decoration: none;
    color: var(--primary);

    &:hover {
        cursor: pointer;
        background: var(--primary-variant);
    }
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
    }, [loader.current, handleObserver]);

    useEffect(() => {
        loading && loadPeople();
    }, [loading, loadPeople]);

    return (
        <Router>
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
                        }) =>
                            item.name !== "" && (
                                <Item
                                    key={item.name}
                                    to={`/${item.url.split(/\//)[5]}`}
                                >
                                    {item.name}
                                </Item>
                            )
                    )}
                    {next !== "" && !loading && (
                        <Loading ref={loader}>Loading...</Loading>
                    )}
                </List>
                <Route
                    render={({ location }) => (
                        <Switch key={location.key} location={location}>
                            <Route path="/:id" render={() => <Details />} />
                        </Switch>
                    )}
                />
            </Main>
        </Router>
    );
}

export default App;
