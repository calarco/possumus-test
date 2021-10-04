import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
        vehicle_class: string;
        pilots: string[];
        films: string[];
        created: string;
        edited: string;
        url: string;
    };
    setPerson: (current: any) => void;
    setFilm: (current: any) => void;
    setVehicle: (current: any) => void;
};

function Vehicle({ data, setPerson, setFilm, setVehicle }: ComponentProps) {
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        data.url.split(/\//)[5] !== id &&
            axios
                .get(`https://swapi.dev/api/vehicles/${id}/`)
                .then((response) => {
                    response.data && setVehicle(response.data);
                });
    }, [data.url, id, setVehicle]);

    return (
        <Panel title={data.name}>
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
            <Label label="vehicle_class">
                <p>{data.vehicle_class}</p>
            </Label>
            <List label="pilots" list={data.pilots} setActive={setPerson} />
            {data.films[1] && (
                <List label="films" list={data.films} setActive={setFilm} />
            )}
        </Panel>
    );
}

export default Vehicle;
