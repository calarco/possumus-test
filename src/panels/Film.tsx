import React from "react";

import Panel from "components/Panel";
import Label from "components/Label";
import List from "components/List";

type ComponentProps = {
    data: {
        title: string;
        episode_id: number;
        opening_crawl: string;
        director: string;
        producer: string;
        release_date: string;
        characters: string[];
        planets: string[];
        species: string[];
        vehicles: string[];
        starships: string[];
        created: string;
        edited: string;
        url: string;
    };
    setPlanet: (current: any) => void;
    setSpecie: (current: any) => void;
    setVehicle: (current: any) => void;
    setStarship: (current: any) => void;
};

function Film({
    data,
    setPlanet,
    setSpecie,
    setVehicle,
    setStarship,
}: ComponentProps) {
    return (
        <Panel>
            <h3>{data.title}</h3>
            <Label label="episode_id">
                <p>{data.episode_id}</p>
            </Label>
            <Label label="opening_crawl" length={3}>
                <p>{data.opening_crawl}</p>
            </Label>
            <Label label="director">
                <p>{data.director}</p>
            </Label>
            <Label label="producer">
                <p>{data.producer}</p>
            </Label>
            <Label label="release_date">
                <p>{data.release_date}</p>
            </Label>
            <Label label="characters" length={data.characters.length}>
                <ul>
                    {data.characters.map(
                        (character, index) =>
                            index !== 0 && (
                                <li key={index}>
                                    <button type="button">{character}</button>
                                </li>
                            )
                    )}
                </ul>
            </Label>
            {data.planets[0] && (
                <List list={data.planets} setActive={setPlanet} />
            )}
            {data.species[0] && (
                <List list={data.species} setActive={setSpecie} />
            )}
            {data.vehicles[0] && (
                <List list={data.vehicles} setActive={setVehicle} />
            )}
            {data.starships[0] && (
                <List list={data.starships} setActive={setStarship} />
            )}
        </Panel>
    );
}

export default Film;
