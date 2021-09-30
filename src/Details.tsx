import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Container = styled.article`
    height: 100%;
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

const Label = styled.label`
    padding: 1rem 1.5rem;
    display: grid;
    color: var(--secondary);

    p {
        color: var(--on-background);
        text-transform: uppercase;
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

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}/`).then((response) => {
            response.data && setDetails(response.data);
        });
    }, [id]);

    return (
        <Container>
            <h3>{details.name}</h3>
            <Label>
                Mass <p>{details.mass}</p>
            </Label>
            <Label>
                Height <p>{details.height}</p>
            </Label>
            <Label>
                Hair color <p>{details.hair_color}</p>
            </Label>
            <Label>
                Skin color <p>{details.skin_color}</p>
            </Label>
            <Label>
                Eye color <p>{details.eye_color}</p>
            </Label>
            <Label>
                Birth year <p>{details.birth_year}</p>
            </Label>
            <Label>
                Gender <p>{details.gender}</p>
            </Label>
            <Label>
                Homeworld <p>{details.homeworld}</p>
            </Label>
            {details.films[0] && (
                <Label>
                    Films:{" "}
                    {details.films.map((film) => (
                        <p>{film}</p>
                    ))}
                </Label>
            )}
            {details.species[0] && (
                <Label>
                    Species:{" "}
                    {details.species.map((specie) => (
                        <p>{specie}</p>
                    ))}
                </Label>
            )}
            {details.vehicles[0] && (
                <Label>
                    Vehicles:{" "}
                    {details.vehicles.map((vehicle) => (
                        <p>{vehicle}</p>
                    ))}
                </Label>
            )}
            {details.starships[0] && (
                <Label>
                    Starships:{" "}
                    {details.starships.map((starship) => (
                        <p>{starship}</p>
                    ))}
                </Label>
            )}
        </Container>
    );
}

export default Details;
