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
        name: string;
        rotation_period: string;
        orbital_period: string;
        diameter: string;
        climate: string;
        gravity: string;
        terrain: string;
        surface_water: string;
        population: string;
        residents: string[];
        films: string[];
        created: string;
        edited: string;
        url: string;
    };
};

function Homeworld({ data }: ComponentProps) {
    return (
        <Container>
            <h3>{data.name}</h3>
            <Cell>
                <label>rotation_period</label>
                <p>{data.rotation_period}</p>
            </Cell>
            <Cell>
                <label>orbital_period</label>
                <p>{data.orbital_period}</p>
            </Cell>
            <Cell>
                <label>diameter</label>
                <p>{data.diameter}</p>
            </Cell>
            <Cell>
                <label>climate</label>
                <p>{data.climate}</p>
            </Cell>
            <Cell>
                <label>gravity</label>
                <p>{data.gravity}</p>
            </Cell>
            <Cell>
                <label>terrain</label>
                <p>{data.terrain}</p>
            </Cell>
            <Cell>
                <label>surface_water</label>
                <p>{data.surface_water}</p>
            </Cell>
            <Cell>
                <label>population</label>
                <p>{data.population}</p>
            </Cell>
            <Cell length={data.residents.length}>
                <label>Residents</label>
                <ul>
                    {data.residents.map(
                        (resident, index) =>
                            index !== 0 && (
                                <li key={index}>
                                    <button type="button">{resident}</button>
                                </li>
                            )
                    )}
                </ul>
            </Cell>
            <Cell length={data.films.length}>
                <label>Films</label>
                <ul>
                    {data.films.map(
                        (film, index) =>
                            index !== 0 && (
                                <li key={index}>
                                    <button type="button">{film}</button>
                                </li>
                            )
                    )}
                </ul>
            </Cell>
        </Container>
    );
}

export default Homeworld;
