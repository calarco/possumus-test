import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://swapi.dev/api";

type HookProps = {
    url: string;
    data: {
        name?: string;
        height?: string;
        mass?: string;
        hair_color?: string;
        skin_color?: string;
        eye_color?: string;
        birth_year?: string;
        gender?: string;
        homeworld?: string;
        films?: string[];
        species?: string[];
        vehicles?: string[];
        starships?: string[];

        title?: string;
        episode_id?: number;
        opening_crawl?: string;
        director?: string;
        producer?: string;
        release_date?: string;
        characters?: string[];
        planets?: string[];

        rotation_period?: string;
        orbital_period?: string;
        diameter?: string;
        climate?: string;
        gravity?: string;
        terrain?: string;
        surface_water?: string;
        population?: string;
        residents?: string[];

        classification?: string;
        designation?: string;
        average_height?: string;
        skin_colors?: string;
        hair_colors?: string;
        eye_colors?: string;
        average_lifespan?: string;
        language?: string;
        people?: string[];

        model?: string;
        manufacturer?: string;
        cost_in_credits?: string;
        length?: string;
        max_atmosphering_speed?: string;
        crew?: string;
        passengers?: string;
        cargo_capacity?: string;
        consumables?: string;
        hyperdrive_rating?: string;
        MGLT?: string;
        starship_class?: string;
        pilots?: string[];
        
        vehicle_class?: string;

        created: string;
        edited: string;
        url: string;
    };
};

const useAxios = ({ url, data }: HookProps) => {
    const [response, setResponse] = useState(data);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        data.url === `${axios.defaults.baseURL}${url}` ?
            setLoading(false) :
            axios.get(url)
                .then((response) => {
                    setResponse(response.data);
                })
                .catch((error) => {
                    setError(error);
                })
                .finally(() => {
                    setLoading(false);
                });
    }, [url, data.url]);

    return { response, error, loading };
};

export default useAxios;