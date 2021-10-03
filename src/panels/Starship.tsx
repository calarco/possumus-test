import React from "react";

import Panel from "components/Panel";
import Label from "components/Label";
import List from "components/List";

type ComponentProps = {
    data: {
        name: string;
        model: string;
        manufacturer: string;
        cost_in_credits: string;
        length: string;
        max_atmosphering_speed: string;
        crew: string;
        passengers: string;
        cargo_capacity: string;
        consumables: string;
        hyperdrive_rating: string;
        MGLT: string;
        starship_class: string;
        pilots: string[];
        films: string[];
        created: string;
        edited: string;
        url: string;
    };
    setFilm: (current: any) => void;
};

function Starship({ data, setFilm }: ComponentProps) {
    return (
        <Panel>
            <h3>{data.name}</h3>
            <Label label="model">
                <p>{data.model}</p>
            </Label>
            <Label label="manufacturer">
                <p>{data.manufacturer}</p>
            </Label>
            <Label label="cost_in_credits">
                <p>{data.cost_in_credits}</p>
            </Label>
            <Label label="length">
                <p>{data.length}</p>
            </Label>
            <Label label="max_atmosphering_speed">
                <p>{data.max_atmosphering_speed}</p>
            </Label>
            <Label label="crew">
                <p>{data.crew}</p>
            </Label>
            <Label label="passengers">
                <p>{data.passengers}</p>
            </Label>
            <Label label="cargo_capacity">
                <p>{data.cargo_capacity}</p>
            </Label>
            <Label label="consumables">
                <p>{data.consumables}</p>
            </Label>
            <Label label="hyperdrive_rating">
                <p>{data.hyperdrive_rating}</p>
            </Label>
            <Label label="MGLT">
                <p>{data.MGLT}</p>
            </Label>
            <Label label="starship_class">
                <p>{data.starship_class}</p>
            </Label>
            <Label label="pilots">
                <ul>
                    {data.pilots.map(
                        (pilot, index) =>
                            index !== 0 && (
                                <li key={index}>
                                    <button type="button">{pilot}</button>
                                </li>
                            )
                    )}
                </ul>
            </Label>
            {data.films[1] && <List list={data.films} setActive={setFilm} />}
        </Panel>
    );
}

export default Starship;
