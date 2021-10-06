import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAxios from "components/useAxios";

import Article from "components/Article";
import Label from "components/Label";
import List from "components/List";

type ComponentProps = {
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
    data,
    setPerson,
    setPlanet,
    setFilm,
    setSpecie,
    setVehicle,
    setStarship,
}: ComponentProps) {
    const { id } = useParams<{ id: string }>();
    const { response, loading } = useAxios({
        url: `/people/${id}/`,
        data: data,
    });

    useEffect(() => {
        setPerson(response);
    }, [response, setPerson]);

    return (
        <Article title={loading ? "" : data.name}>
            <Label label="HEIGHT (cm)" loading={loading}>
                <p>{data.height}</p>
            </Label>
            <Label label="HAIR COLOR" loading={loading}>
                <p>{data.hair_color}</p>
            </Label>
            <Label label="EYE COLOR" loading={loading}>
                <p>{data.eye_color}</p>
            </Label>
            <Label label="SKIN COLOR" loading={loading}>
                <p>{data.skin_color}</p>
            </Label>
            <Label label="MASS (kg)" loading={loading}>
                <p>{data.mass}</p>
            </Label>
            <Label label="BIRTH YEAR" loading={loading}>
                <p>{data.birth_year}</p>
            </Label>
            <Label label="GENDER" loading={loading}>
                <p>{data.gender}</p>
            </Label>
            <List
                label="HOMEWORLD"
                list={loading ? [""] : [data.homeworld]}
                setActive={setPlanet}
            />
            {data.species[0] && (
                <List
                    label="SPECIES"
                    list={loading ? [""] : data.species}
                    setActive={setSpecie}
                />
            )}
            {data.films[0] && (
                <List
                    label="FILMS"
                    list={loading ? [""] : data.films}
                    setActive={setFilm}
                />
            )}
            {data.vehicles[0] && (
                <List
                    label="VEHICLES"
                    list={loading ? [""] : data.vehicles}
                    setActive={setVehicle}
                />
            )}
            {data.starships[0] && (
                <List
                    label="STARSHIPS"
                    list={loading ? [""] : data.starships}
                    setActive={setStarship}
                />
            )}
        </Article>
    );
}

export default Person;
