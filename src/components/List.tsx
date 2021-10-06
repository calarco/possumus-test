import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import transition from "styled-transition-group";
import { TransitionGroup } from "react-transition-group";

import Label from "components/Label";

const Item = transition.li.attrs({
    unmountOnExit: true,
    timeout: {
        enter: 300,
        exit: 200,
    },
})`
    &:enter {
        opacity: 0;
        transform: scale(0.95);
    }

    &:enter-active {
        opacity: 1;
        transform: initial;
        transition: 0.3s ease-out;
        
    }

    &:exit {
        opacity: 1;
    }

    &:exit-active {
        opacity: 0;
        transition: 0.2s ease-in;
    }
`;

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
        list[0] !== "" &&
            list.map((url: string, index: number) =>
                axios.get(url).then((response) => {
                    response.data &&
                        setData((data) => [...data, response.data]);
                    index === list.length - 1 && setLoading(false);
                })
            );
        // eslint-disable-next-line
    }, [JSON.stringify(list)]);

    return (
        <Label label={label} length={list.length} loading={loading}>
            <ul>
                <TransitionGroup component={null}>
                    {data.map(
                        (item, index) =>
                            index !== 0 && (
                                <Item key={index}>
                                    <Link
                                        to={`/${item.url?.split(/\//)[4]}/${
                                            item.url?.split(/\//)[5]
                                        }`}
                                        onClick={() => setActive(item)}
                                    >
                                        {item.name || item.title}
                                    </Link>
                                </Item>
                            )
                    )}
                </TransitionGroup>
                {loading && (
                    <Item key={0}>
                        <button type="button">_</button>
                    </Item>
                )}
            </ul>
        </Label>
    );
}

export default List;
