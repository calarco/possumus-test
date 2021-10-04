import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
    setPerson: (current: any) => void;
    setPlanet: (current: any) => void;
    setFilm: (current: any) => void;
    setSpecie: (current: any) => void;
};

function Specie({
    data,
    setPerson,
    setPlanet,
    setFilm,
    setSpecie,
}: ComponentProps) {
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        data.url.split(/\//)[5] !== id &&
            axios
                .get(`https://swapi.dev/api/species/${id}/`)
                .then((response) => {
                    response.data && setSpecie(response.data);
                });
    }, [data.url, id, setSpecie]);
    return (
        <Panel title={data.name}>
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
            <List
                label="homeworld"
                list={[data.homeworld]}
                setActive={setPlanet}
            />
            <Label label="language">
                <p>{data.language}</p>
            </Label>
            <List label="people" list={data.people} setActive={setPerson} />
            {data.films[1] && (
                <List label="films" list={data.films} setActive={setFilm} />
            )}
        </Panel>
    );
}

export default Specie;
