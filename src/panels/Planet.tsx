import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
    setPerson: (current: any) => void;
    setFilm: (current: any) => void;
    setPlanet: (current: any) => void;
};

function Planet({ data, setPerson, setFilm, setPlanet }: ComponentProps) {
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        data.url.split(/\//)[5] !== id &&
            axios
                .get(`https://swapi.dev/api/planets/${id}/`)
                .then((response) => {
                    response.data && setPlanet(response.data);
                });
    }, [data.url, id, setPlanet]);

    return (
        <Panel title={data.name}>
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
            <List
                label="residents"
                list={data.residents}
                setActive={setPerson}
            />
            {data.films[1] && (
                <List label="films" list={data.films} setActive={setFilm} />
            )}
        </Panel>
    );
}

export default Planet;
