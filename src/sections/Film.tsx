import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAxios from "components/useAxios";

import Article from "components/Article";
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
    setPerson: (current: any) => void;
    setPlanet: (current: any) => void;
    setSpecie: (current: any) => void;
    setFilm: (current: any) => void;
    setVehicle: (current: any) => void;
    setStarship: (current: any) => void;
};

function Film({
    data,
    setPerson,
    setPlanet,
    setSpecie,
    setFilm,
    setVehicle,
    setStarship,
}: ComponentProps) {
    const { id } = useParams<{ id: string }>();
    const { response, loading } = useAxios({
        url: `/films/${id}/`,
        data: data,
    });

    useEffect(() => {
        setFilm(response);
    }, [response, setFilm]);

    return (
        <Article
            title={loading ? "" : data.title}
            subtitle={`Episode ${data.episode_id}`}
        >
            <Label label="OPENING CRAWL" length={3} loading={loading}>
                <p>{data.opening_crawl}</p>
            </Label>
            <Label label="DIRECTOR" loading={loading}>
                <p>{data.director}</p>
            </Label>
            <Label label="PRODUCER" loading={loading}>
                <p>{data.producer}</p>
            </Label>
            <Label label="RELEASE DATE" loading={loading}>
                <p>{data.release_date}</p>
            </Label>
            {data.characters[0] && (
                <List
                    label="CHARACTERS"
                    list={loading ? [""] : data.characters}
                    setActive={setPerson}
                />
            )}
            {data.planets[0] && (
                <List
                    label="PLANETS"
                    list={loading ? [""] : data.planets}
                    setActive={setPlanet}
                />
            )}
            {data.species[0] && (
                <List
                    label="SPECIES"
                    list={loading ? [""] : data.species}
                    setActive={setSpecie}
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

export default Film;
