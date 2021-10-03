import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Label from "components/Label";

type ComponentProps = {
    label: string;
    list: string[];
    setActive: (current: any) => void;
};

function List({ label, list, setActive }: ComponentProps) {
    const [data, setData] = useState([
        {
            name: "",
            title: "",
            url: "",
        },
    ]);

    useEffect(() => {
        !data[1] &&
            list.map((url: string) =>
                axios.get(url).then((response) => {
                    response.data &&
                        setData((data) => [...data, response.data]);
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
                                {list[0].split(/\//)[4] === "people" ? (
                                    <Link to={`/${item.url.split(/\//)[5]}`}>
                                        <button
                                            type="button"
                                            onClick={() => setActive(item)}
                                        >
                                            {item.name}
                                        </button>
                                    </Link>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={() => setActive(item)}
                                    >
                                        {item.name || item.title}
                                    </button>
                                )}
                            </li>
                        )
                )}
            </ul>
        </Label>
    );
}

export default List;
