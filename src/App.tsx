import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled, { css } from "styled-components";
import { TransitionGroup } from "react-transition-group";
import transition from "styled-transition-group";

import GlobalStyle, { Device } from "globalStyle";
import People from "sections/People";
import Person from "sections/Person";
import Planet from "sections/Planet";
import Film from "sections/Film";
import Specie from "sections/Specie";
import Vehicle from "sections/Vehicle";
import Starship from "sections/Starship";

const Main = styled.main`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: #1a1a1a;
    display: flex;
    justify-content: center;
`;

const Content = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 80rem;
    border-radius: 4px;
    overflow: hidden;
    background: #000;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 1);
    display: grid;
    grid-template-columns: 1fr;

    @media ${Device.laptop} {
        grid-template-columns: 20rem 1fr;
    }
`;

type Props = {
    home?: boolean;
};

const Box = styled.div<Props>`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 1;
    transition: 0.3s ease-out;

    ${(props) =>
        props.home &&
        css`
            transform: translateY(-1rem);
            visibility: hidden;
            opacity: 0;

            @media ${Device.laptop} {
                transform: initial;
                visibility: visible;
                opacity: 1;
            }
        `};

    @media ${Device.laptop} {
        position: relative;
        margin: 2rem;
    }

    > div {
        height: 100%;
        border-radius: 2px;
        overflow: hidden;
        background: var(--secondary-variant);
        backdrop-filter: blur(1rem) saturate(0);

        @media ${Device.laptop} {
            border: 1px solid var(--secondary);
            box-shadow: var(--shadow-secondary);
            backdrop-filter: none;
        }
    }
`;

const Transition = transition.div.attrs({
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

const Home = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    justify-items: center;
    gap: 1rem;

    h3 {
        color: var(--on-background-variant);
    }
`;

function App() {
    const [person, setPerson] = useState({
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
    });
    const [planet, setPlanet] = useState({
        name: "",
        rotation_period: "",
        orbital_period: "",
        diameter: "",
        climate: "",
        gravity: "",
        terrain: "",
        surface_water: "",
        population: "",
        residents: [""],
        films: [""],
        created: "",
        edited: "",
        url: "",
    });
    const [film, setFilm] = useState({
        title: "",
        episode_id: 0,
        opening_crawl: "",
        director: "",
        producer: "",
        release_date: "",
        characters: [""],
        planets: [""],
        species: [""],
        vehicles: [""],
        starships: [""],
        created: "",
        edited: "",
        url: "",
    });
    const [specie, setSpecie] = useState({
        name: "",
        classification: "",
        designation: "",
        average_height: "",
        skin_colors: "",
        hair_colors: "",
        eye_colors: "",
        average_lifespan: "",
        homeworld: "",
        language: "",
        people: [""],
        films: [""],
        created: "",
        edited: "",
        url: "",
    });
    const [vehicle, setVehicle] = useState({
        name: "",
        model: "",
        manufacturer: "",
        cost_in_credits: "",
        length: "",
        max_atmosphering_speed: "",
        crew: "",
        passengers: "",
        cargo_capacity: "",
        consumables: "",
        vehicle_class: "",
        pilots: [""],
        films: [""],
        created: "",
        edited: "",
        url: "",
    });
    const [starship, setStarship] = useState({
        name: "",
        model: "",
        manufacturer: "",
        cost_in_credits: "",
        length: "",
        max_atmosphering_speed: "",
        crew: "",
        passengers: "",
        cargo_capacity: "",
        consumables: "",
        hyperdrive_rating: "",
        MGLT: "",
        starship_class: "",
        pilots: [""],
        films: [""],
        created: "",
        edited: "",
        url: "",
    });

    return (
        <Router>
            <GlobalStyle />
            <Main>
                <Content>
                    <People setPerson={setPerson} />
                    <Route
                        render={({ location }) => (
                            <Box
                                home={location.pathname === "/" ? true : false}
                            >
                                <TransitionGroup component={"div"}>
                                    <Transition key={location.key}>
                                        <Switch
                                            key={location.key}
                                            location={location}
                                        >
                                            <Route
                                                exact
                                                path="/"
                                                render={() => (
                                                    <Home>
                                                        <h1>Star Wars</h1>
                                                        <h3>database</h3>
                                                    </Home>
                                                )}
                                            />
                                            <Route
                                                path="/people/:id"
                                                render={() => (
                                                    <Person
                                                        key={person.name}
                                                        data={person}
                                                        setPerson={setPerson}
                                                        setPlanet={setPlanet}
                                                        setFilm={setFilm}
                                                        setSpecie={setSpecie}
                                                        setVehicle={setVehicle}
                                                        setStarship={
                                                            setStarship
                                                        }
                                                    />
                                                )}
                                            />
                                            <Route
                                                path="/planets/:id"
                                                render={() => (
                                                    <Planet
                                                        key={planet.name}
                                                        data={planet}
                                                        setPerson={setPerson}
                                                        setFilm={setFilm}
                                                        setPlanet={setPlanet}
                                                    />
                                                )}
                                            />
                                            <Route
                                                path="/films/:id"
                                                render={() => (
                                                    <Film
                                                        key={film.title}
                                                        data={film}
                                                        setFilm={setFilm}
                                                        setPerson={setPerson}
                                                        setPlanet={setPlanet}
                                                        setSpecie={setSpecie}
                                                        setVehicle={setVehicle}
                                                        setStarship={
                                                            setStarship
                                                        }
                                                    />
                                                )}
                                            />
                                            <Route
                                                path="/species/:id"
                                                render={() => (
                                                    <Specie
                                                        key={specie.name}
                                                        data={specie}
                                                        setSpecie={setSpecie}
                                                        setPlanet={setPlanet}
                                                        setPerson={setPerson}
                                                        setFilm={setFilm}
                                                    />
                                                )}
                                            />
                                            <Route
                                                path="/vehicles/:id"
                                                render={() => (
                                                    <Vehicle
                                                        key={vehicle.name}
                                                        data={vehicle}
                                                        setVehicle={setVehicle}
                                                        setPerson={setPerson}
                                                        setFilm={setFilm}
                                                    />
                                                )}
                                            />
                                            <Route
                                                path="/starships/:id"
                                                render={() => (
                                                    <Starship
                                                        key={starship.name}
                                                        data={starship}
                                                        setStarship={
                                                            setStarship
                                                        }
                                                        setPerson={setPerson}
                                                        setFilm={setFilm}
                                                    />
                                                )}
                                            />
                                        </Switch>
                                    </Transition>
                                </TransitionGroup>
                            </Box>
                        )}
                    />
                </Content>
            </Main>
        </Router>
    );
}

export default App;
