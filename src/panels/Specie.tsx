import React from "react";

import Panel from "components/Panel";
import Label from "components/Label";
import List from "components/List";

type ComponentProps = {
    data: {
        name: string;
        classification: string;
        designation: string;
        average_height: string;
        skin_colors: string;
        hair_colors: string;
        eye_colors: string;
        average_lifespan: string;
        homeworld: string;
        language: string;
        people: string[];
        films: string[];
        created: string;
        edited: string;
        url: string;
    };
    setFilm: (current: any) => void;
};

function Specie({ data, setFilm }: ComponentProps) {
    return (
        <Panel>
            <h3>{data.name}</h3>
            <Label label="classification">
                <p>{data.classification}</p>
            </Label>
            <Label label="designation">
                <p>{data.designation}</p>
            </Label>
            <Label label="average_height">
                <p>{data.average_height}</p>
            </Label>
            <Label label="skin_colors">
                <p>{data.skin_colors}</p>
            </Label>
            <Label label="hair_colors">
                <p>{data.hair_colors}</p>
            </Label>
            <Label label="eye_colors">
                <p>{data.eye_colors}</p>
            </Label>
            <Label label="average_lifespan">
                <p>{data.average_lifespan}</p>
            </Label>
            <Label label="homeworld">
                <p>{data.homeworld}</p>
            </Label>
            <Label label="language">
                <p>{data.language}</p>
            </Label>
            <Label label="people">
                <ul>
                    {data.people.map(
                        (people, index) =>
                            index !== 0 && (
                                <li key={index}>
                                    <button type="button">{people}</button>
                                </li>
                            )
                    )}
                </ul>
            </Label>
            {data.films[1] && <List list={data.films} setActive={setFilm} />}
        </Panel>
    );
}

export default Specie;
