import React from "react";

import Panel from "components/Panel";
import Label from "components/Label";
import List from "components/List";

type ComponentProps = {
    data: {
        name: string;
        rotation_period: string;
        orbital_period: string;
        diameter: string;
        climate: string;
        gravity: string;
        terrain: string;
        surface_water: string;
        population: string;
        residents: string[];
        films: string[];
        created: string;
        edited: string;
        url: string;
    };
    setFilm: (current: any) => void;
};

function Planet({ data, setFilm }: ComponentProps) {
    return (
        <Panel>
            <h3>{data.name}</h3>
            <Label label="rotation_period">
                <p>{data.rotation_period}</p>
            </Label>
            <Label label="orbital_period">
                <p>{data.orbital_period}</p>
            </Label>
            <Label label="diameter">
                <p>{data.diameter}</p>
            </Label>
            <Label label="climate">
                <p>{data.climate}</p>
            </Label>
            <Label label="gravity">
                <p>{data.gravity}</p>
            </Label>
            <Label label="terrain">
                <p>{data.terrain}</p>
            </Label>
            <Label label="surface_water">
                <p>{data.surface_water}</p>
            </Label>
            <Label label="population">
                <p>{data.population}</p>
            </Label>
            <Label label="residents" length={data.residents.length}>
                <ul>
                    {data.residents.map(
                        (resident, index) =>
                            index !== 0 && (
                                <li key={index}>
                                    <button type="button">{resident}</button>
                                </li>
                            )
                    )}
                </ul>
            </Label>
            {data.films[1] && <List list={data.films} setActive={setFilm} />}
        </Panel>
    );
}

export default Planet;
