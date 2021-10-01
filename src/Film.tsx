import React from "react";
import styled, { css } from "styled-components";

const Container = styled.article`
    padding: 1rem 1.5rem;
    display: grid;

    label {
        color: var(--secondary);
        text-transform: uppercase;
    }

    p {
        color: var(--on-background);
        text-transform: capitalize;
    }
`;

type Props = {
    readonly length?: number;
};

const Cell = styled.div<Props>`
    padding: 1rem 1.5rem;
    display: grid;

    ${(props) =>
        props.length &&
        css`
            grid-column-end: span ${props.length > 3 ? 3 : props.length};
        `};

    label {
        color: var(--secondary);
        text-transform: uppercase;
    }

    p,
    li {
        color: var(--on-background);
        text-transform: capitalize;
        font: var(--body1);
    }

    ul {
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }
`;

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
};

function Homeworld({ data }: ComponentProps) {
    return (
        <Container>
            <h3>{data.title}</h3>
            <Cell>
                <label>episode_id</label>
                <p>{data.episode_id}</p>
            </Cell>
            <Cell length={10}>
                <label>opening_crawl</label>
                <p>{data.opening_crawl}</p>
            </Cell>
            <Cell>
                <label>director</label>
                <p>{data.director}</p>
            </Cell>
            <Cell>
                <label>producer</label>
                <p>{data.producer}</p>
            </Cell>
            <Cell>
                <label>release_date</label>
                <p>{data.release_date}</p>
            </Cell>
            <Cell length={data.characters.length}>
                <label>characters</label>
                <ul>
                    {data.characters.map(
                        (character, index) =>
                            index !== 0 && (
                                <li key={index}>
                                    <button type="button">{character}</button>
                                </li>
                            )
                    )}
                </ul>
            </Cell>
            <Cell length={data.planets.length}>
                <label>planets</label>
                <ul>
                    {data.planets.map(
                        (planet, index) =>
                            index !== 0 && (
                                <li key={index}>
                                    <button type="button">{planet}</button>
                                </li>
                            )
                    )}
                </ul>
            </Cell>
            <Cell length={data.species.length}>
                <label>Species</label>
                <ul>
                    {data.species.map(
                        (specie, index) =>
                            index !== 0 && (
                                <li key={index}>
                                    <button type="button">{specie}</button>
                                </li>
                            )
                    )}
                </ul>
            </Cell>
            {data.vehicles[1] && (
                <Cell length={data.vehicles.length}>
                    <label>Vehicles</label>
                    <ul>
                        {data.vehicles.map(
                            (vehicle, index) =>
                                index !== 0 && (
                                    <li key={index}>
                                        <button type="button">{vehicle}</button>
                                    </li>
                                )
                        )}
                    </ul>
                </Cell>
            )}
            {data.starships[1] && (
                <Cell length={data.starships.length}>
                    <label>Starships</label>
                    <ul>
                        {data.starships.map(
                            (starship, index) =>
                                index !== 0 && (
                                    <li key={index}>
                                        <button type="button">
                                            {starship}
                                        </button>
                                    </li>
                                )
                        )}
                    </ul>
                </Cell>
            )}
        </Container>
    );
}

export default Homeworld;
