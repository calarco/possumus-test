import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Label from "components/Label";

type ComponentProps = {
    label: string;
    list: string[];
    setActive: (current: any) => void;
};

function List({ label, list, setActive }: ComponentProps) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([
        {
            name: "",
            title: "",
            url: "",
        },
    ]);

    useEffect(() => {
        !data[1] &&
            list.map((url: string, index: number) =>
                axios.get(url).then((response) => {
                    response.data &&
                        setData((data) => [...data, response.data]);
                    index === list.length - 1 && setLoading(false);
                })
            );
    }, [list, data]);

    return (
        <Label label={label} length={list.length}>
            <ul>
                {data.map(
                    (item, index) =>
                        index !== 0 && (
                            <li key={index}>
                                <Link
                                    to={`/${item.url?.split(/\//)[4]}/${
                                        item.url?.split(/\//)[5]
                                    }`}
                                >
                                    <button
                                        type="button"
                                        onClick={() => setActive(item)}
                                    >
                                        {item.name || item.title}
                                    </button>
                                </Link>
                            </li>
                        )
                )}
                {loading && (
                    <li>
                        <p>loading</p>
                    </li>
                )}
            </ul>
        </Label>
    );
}

export default List;
