import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://swapi.dev/api";

type HookProps = {
    url: string;
    dontLoad: boolean;
};

const useAxios = ({ url, dontLoad }: HookProps) => {
    const [response, setResponse] = useState<Data>({
        created: "",
        edited: "",
        url: "",
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (url === "/" || dontLoad)
            ? setLoading(false)
            : axios.get(url)
                .then((response) => {
                    response.data && setResponse(response.data);
                })
                .catch((error) => {
                    setError(error);
                })
                .finally(() => {
                    setLoading(false);
                });
    }, [url, dontLoad]);

    return { response, error, loading };
};

export default useAxios;