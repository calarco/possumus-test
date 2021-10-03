import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import GlobalStyle from "globalStyle";
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
    overflow-y: hidden;
    display: grid;
    grid-template-columns: 20rem 1fr 1fr;
    justify-content: center;
`;

function App() {
    const [active, setActive] = useState("");
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

    useEffect(() => {
        planet.name !== "" && setActive("planet");
    }, [planet]);

    useEffect(() => {
        film.title !== "" && setActive("film");
    }, [film]);

    useEffect(() => {
        specie.name !== "" && setActive("specie");
    }, [specie]);

    useEffect(() => {
        vehicle.name !== "" && setActive("vehicle");
    }, [vehicle]);

    useEffect(() => {
        starship.name !== "" && setActive("starship");
    }, [starship]);

    return (
        <Router>
            <GlobalStyle />
            <Main>
                <People setPerson={setPerson} />
                <Route
                    render={({ location }) => (
                        <Switch key={location.key} location={location}>
                            <Route
                                path="/:id"
                                render={() => (
                                    <Person
                                        id={location.pathname.slice(1)}
                                        data={person}
                                        setPerson={setPerson}
                                        setPlanet={setPlanet}
                                        setFilm={setFilm}
                                        setSpecie={setSpecie}
                                        setVehicle={setVehicle}
                                        setStarship={setStarship}
                                    />
                                )}
                            />
                        </Switch>
                    )}
                />
                {active === "planet" ? (
                    <Planet
                        data={planet}
                        setPerson={setPerson}
                        setFilm={setFilm}
                    />
                ) : active === "film" ? (
                    <Film
                        data={film}
                        setPerson={setPerson}
                        setPlanet={setPlanet}
                        setSpecie={setSpecie}
                        setVehicle={setVehicle}
                        setStarship={setStarship}
                    />
                ) : active === "specie" ? (
                    <Specie
                        data={specie}
                        setPerson={setPerson}
                        setFilm={setFilm}
                    />
                ) : active === "vehicle" ? (
                    <Vehicle
                        data={vehicle}
                        setPerson={setPerson}
                        setFilm={setFilm}
                    />
                ) : active === "starship" ? (
                    <Starship
                        data={starship}
                        setPerson={setPerson}
                        setFilm={setFilm}
                    />
                ) : undefined}
            </Main>
        </Router>
    );
}

export default App;
