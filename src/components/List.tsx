import React, { useState, useEffect } from "react";
import axios from "axios";

import Label from "components/Label";

type ComponentProps = {
    list: string[];
    setActive: (current: any) => void;
};

function List({ list, setActive }: ComponentProps) {
    const [data, setData] = useState([
        {
            name: "",
            title: "",
        },
    ]);

    useEffect(() => {
        list.map((url: string) =>
            axios.get(url).then((response) => {
                response.data && setData((data) => [...data, response.data]);
            })
        );
        // eslint-disable-next-line
    }, [JSON.stringify(list)]);

    return (
        <Label label={list[0].split(/\//)[4]} length={list.length}>
            <ul>
                {data.map(
                    (item, index) =>
                        index !== 0 && (
                            <li key={index}>
                                <button
                                    type="button"
                                    onClick={() => setActive(item)}
                                >
                                    {item.name || item.title}
                                </button>
                            </li>
                        )
                )}
            </ul>
        </Label>
    );
}

export default List;
