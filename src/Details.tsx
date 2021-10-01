import React, { useState, useEffect } from "react";
import axios from "axios";
import styled, { css } from "styled-components";
import { useParams } from "react-router-dom";

import Homeworld from "Homeworld";
import Film from "Film";

const Container = styled.article`
    height: 100%;
    padding: 1rem 1.5rem;
    overflow-y: overlay;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-content: start;
    align-items: start;

    h3 {
        grid-column-end: span 3;
        padding: 1rem 1.5rem;
    }
`;

type Props = {
    readonly length?: number;
};

const Cell = styled.div<Props>`
    padding: 1rem 1.5rem;
    display: grid;

    ${(props) =>
        props.length &&
        css`
            grid-column-end: span ${props.length > 3 ? 3 : props.length};
        `};

    label {
        color: var(--secondary);
        text-transform: uppercase;
    }

    p,
    li {
        color: var(--on-background);
        text-transform: capitalize;
        font: var(--body1);
    }

    ul {
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }
`;

function Details() {
    const { id } = useParams<{ id: string }>();
    const [details, setDetails] = useState({
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
    const [current, setCurrent] = useState("");
    const [homeworld, setHomeworld] = useState({
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
    const [films, setFilms] = useState([
        {
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
        },
    ]);
    const [species, setSpecies] = useState([
        {
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
        },
    ]);
    const [vehicles, setVehicles] = useState([
        {
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
        },
    ]);
    const [starships, setStarships] = useState([
        {
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
        },
    ]);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}/`).then((response) => {
            response.data && setDetails(response.data);
            response.data.homeworld &&
                axios.get(response.data.homeworld).then((response) => {
                    response.data && setHomeworld(response.data);
                });
            response.data.films[0] &&
                response.data.films.map((film: string) =>
                    axios.get(film).then((response) => {
                        response.data &&
                            setFilms((films) => [...films, response.data]);
                    })
                );
            response.data.species[0] &&
                response.data.species.map((specie: string) =>
                    axios.get(specie).then((response) => {
                        response.data &&
                            setSpecies((species) => [
                                ...species,
                                response.data,
                            ]);
                    })
                );
            response.data.vehicles[0] &&
                response.data.vehicles.map((vehicle: string) =>
                    axios.get(vehicle).then((response) => {
                        response.data &&
                            setVehicles((vehicles) => [
                                ...vehicles,
                                response.data,
                            ]);
                    })
                );
            response.data.starships[0] &&
                response.data.starships.map((starship: string) =>
                    axios.get(starship).then((response) => {
                        response.data &&
                            setStarships((starships) => [
                                ...starships,
                                response.data,
                            ]);
                    })
                );
        });
    }, [id]);

    return (
        <>
            <Container>
                <h3>{details.name}</h3>
                <Cell>
                    <label>Height</label>
                    <p>{details.height}</p>
                </Cell>
                <Cell>
                    <label>Hair color</label>
                    <p>{details.hair_color}</p>
                </Cell>
                <Cell>
                    <label>Eye color</label>
                    <p>{details.eye_color}</p>
                </Cell>
                <Cell>
                    <label>Skin color</label>
                    <p>{details.skin_color}</p>
                </Cell>
                <Cell>
                    <label>Mass</label>
                    <p>{details.mass}</p>
                </Cell>
                <Cell>
                    <label>Birth year</label>
                    <p>{details.birth_year}</p>
                </Cell>
                <Cell>
                    <label>Gender</label>
                    <p>{details.gender}</p>
                </Cell>
                <Cell>
                    <label>Homeworld</label>
                    <button
                        type="button"
                        onClick={() =>
                            setCurrent(
                                `${homeworld.url.split(/\//)[4]}/${
                                    homeworld.url.split(/\//)[5]
                                }`
                            )
                        }
                    >
                        {homeworld.name}
                    </button>
                </Cell>
                {details.species[1] && (
                    <Cell>
                        <label>Species</label>
                        <ul>
                            {species.map(
                                (specie, index) =>
                                    index !== 0 && (
                                        <li key={index}>
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setCurrent(
                                                        `${
                                                            specie.url.split(
                                                                /\//
                                                            )[4]
                                                        }/${
                                                            specie.url.split(
                                                                /\//
                                                            )[5]
                                                        }`
                                                    )
                                                }
                                            >
                                                {specie.name}
                                            </button>
                                        </li>
                                    )
                            )}
                        </ul>
                    </Cell>
                )}
                <Cell length={details.films.length}>
                    <label>Films</label>
                    <ul>
                        {films.map(
                            (film, index) =>
                                index !== 0 && (
                                    <li key={index}>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setCurrent(
                                                    `${
                                                        film.url.split(/\//)[4]
                                                    }/${
                                                        film.url.split(/\//)[5]
                                                    }`
                                                )
                                            }
                                        >
                                            {film.title}
                                        </button>
                                    </li>
                                )
                        )}
                    </ul>
                </Cell>
                {details.vehicles[1] && (
                    <Cell length={details.vehicles.length}>
                        <label>Vehicles</label>
                        <ul>
                            {vehicles.map(
                                (vehicle, index) =>
                                    index !== 0 && (
                                        <li key={index}>
                                            <button type="button">
                                                {vehicle.name}
                                            </button>
                                        </li>
                                    )
                            )}
                        </ul>
                    </Cell>
                )}
                {details.starships[1] && (
                    <Cell length={details.starships.length}>
                        <label>Starships</label>
                        <ul>
                            {starships.map(
                                (starship, index) =>
                                    index !== 0 && (
                                        <li key={index}>
                                            <button type="button">
                                                {starship.name}
                                            </button>
                                        </li>
                                    )
                            )}
                        </ul>
                    </Cell>
                )}
            </Container>
            <div>
                {current.split(/\//)[0] === "planets" ? (
                    <Homeworld data={homeworld} />
                ) : current.split(/\//)[0] === "films" ? (
                    <Film
                        data={
                            films.find(
                                ({ url }) =>
                                    url.split(/\//)[5] ===
                                    current.split(/\//)[1]
                            ) || films[0]
                        }
                    />
                ) : undefined}
            </div>
        </>
    );
}

export default Details;
