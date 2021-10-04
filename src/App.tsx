import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { TransitionGroup } from "react-transition-group";
import transition from "styled-transition-group";

import GlobalStyle, { Device } from "globalStyle";
import People from "panels/People";
import Person from "panels/Person";
import Planet from "panels/Planet";
import Film from "panels/Film";
import Specie from "panels/Specie";
import Vehicle from "panels/Vehicle";
import Starship from "panels/Starship";

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
    box-shadow: 0 0.5px 0.7px rgba(0, 0, 0, 0.079),
        0 1.6px 2.5px rgba(0, 0, 0, 0.059), 5px 7px 11px rgba(0, 0, 0, 0.121),
        -5px -5px 10px rgba(255, 255, 255, 0);
    display: grid;
    grid-template-columns: 20rem 1fr;
`;

const Box = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 2rem;
    overflow: hidden;

    @media ${Device.laptop} {
        position: relative;
    }

    > div {
        height: 100%;
        background: var(--secondary-variant);
        border: 1px solid var(--secondary);
    }
`;

const Details = transition.div.attrs({
    unmountOnExit: true,
    timeout: {
        enter: 300,
        exit: 150,
    },
})`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    &:enter {
            opacity: 0;
            transform: scale(1.05);
        
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
            transform: translateY(1rem);
            transition: 0.2s ease-in;
        
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
                    <Box>
                        <div>
                            <Route
                                render={({ location }) => (
                                    <TransitionGroup component={null}>
                                        <Details key={location.key}>
                                            <Switch
                                                key={location.key}
                                                location={location}
                                            >
                                                <Route
                                                    path="/people/:id"
                                                    render={() => (
                                                        <Person
                                                            key={person.name}
                                                            data={person}
                                                            setPerson={
                                                                setPerson
                                                            }
                                                            setPlanet={
                                                                setPlanet
                                                            }
                                                            setFilm={setFilm}
                                                            setSpecie={
                                                                setSpecie
                                                            }
                                                            setVehicle={
                                                                setVehicle
                                                            }
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
                                                            setPerson={
                                                                setPerson
                                                            }
                                                            setFilm={setFilm}
                                                            setPlanet={
                                                                setPlanet
                                                            }
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
                                                            setPerson={
                                                                setPerson
                                                            }
                                                            setPlanet={
                                                                setPlanet
                                                            }
                                                            setSpecie={
                                                                setSpecie
                                                            }
                                                            setVehicle={
                                                                setVehicle
                                                            }
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
                                                            setSpecie={
                                                                setSpecie
                                                            }
                                                            setPlanet={
                                                                setPlanet
                                                            }
                                                            setPerson={
                                                                setPerson
                                                            }
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
                                                            setVehicle={
                                                                setVehicle
                                                            }
                                                            setPerson={
                                                                setPerson
                                                            }
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
                                                            setPerson={
                                                                setPerson
                                                            }
                                                            setFilm={setFilm}
                                                        />
                                                    )}
                                                />
                                            </Switch>
                                        </Details>
                                    </TransitionGroup>
                                )}
                            />
                        </div>
                    </Box>
                </Content>
            </Main>
        </Router>
    );
}

export default App;
