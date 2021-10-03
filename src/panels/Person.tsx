import React, { useEffect } from "react";
import axios from "axios";

import Panel from "components/Panel";
import Label from "components/Label";
import List from "components/List";

type ComponentProps = {
    id: string;
    data: {
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
    };
    setPerson: (current: any) => void;
    setPlanet: (current: any) => void;
    setFilm: (current: any) => void;
    setSpecie: (current: any) => void;
    setVehicle: (current: any) => void;
    setStarship: (current: any) => void;
};

function Person({
    id,
    data,
    setPerson,
    setPlanet,
    setFilm,
    setSpecie,
    setVehicle,
    setStarship,
}: ComponentProps) {
    useEffect(() => {
        data.url.split(/\//)[5] !== id &&
            axios
                .get(`https://swapi.dev/api/people/${id}/`)
                .then((response) => {
                    response.data && setPerson(response.data);
                });
    }, [data.url, id, setPerson]);

    return (
        <Panel>
            <h3>{data.name}</h3>
            <Label label="height">
                <p>{data.height}</p>
            </Label>
            <Label label="hair_color">
                <p>{data.hair_color}</p>
            </Label>
            <Label label="eye_color">
                <p>{data.eye_color}</p>
            </Label>
            <Label label="skin_color">
                <p>{data.skin_color}</p>
            </Label>
            <Label label="mass">
                <p>{data.mass}</p>
            </Label>
            <Label label="birth_year">
                <p>{data.birth_year}</p>
            </Label>
            <Label label="gender">
                <p>{data.gender}</p>
            </Label>
            <List
                label="homeworld"
                list={[data.homeworld]}
                setActive={setPlanet}
            />
            {data.species[0] && (
                <List
                    label="species"
                    list={data.species}
                    setActive={setSpecie}
                />
            )}
            <List label="films" list={data.films} setActive={setFilm} />
            {data.vehicles[0] && (
                <List
                    label="vehicles"
                    list={data.vehicles}
                    setActive={setVehicle}
                />
            )}
            {data.starships[0] && (
                <List
                    label="starships"
                    list={data.starships}
                    setActive={setStarship}
                />
            )}
        </Panel>
    );
}

export default Person;
