import { useEffect } from "react";
import { Location } from "history";
import { Route, Switch } from "react-router-dom";
import styled, { css } from "styled-components";
import { TransitionGroup } from "react-transition-group";
import transition from "styled-transition-group";

import { Device } from "globalStyle";
import useAxios from "components/useAxios";
import Person from "sections/Person";
import Planet from "sections/Planet";
import Film from "sections/Film";
import Specie from "sections/Specie";
import Vehicle from "sections/Vehicle";
import Starship from "sections/Starship";

type Props = {
    home?: boolean;
};

const Container = styled.div<Props>`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 1;
    transition: 0.3s ease-out;

    ${(props) =>
        props.home &&
        css`
            transform: translateY(-1rem);
            visibility: hidden;
            opacity: 0;

            @media ${Device.laptop} {
                transform: initial;
                visibility: visible;
                opacity: 1;
            }
        `};

    @media ${Device.laptop} {
        position: relative;
        margin: 2rem;
    }

    > div {
        height: 100%;
        border-radius: 2px;
        overflow: hidden;
        background: var(--secondary-variant);
        backdrop-filter: blur(1rem) saturate(0);

        @media ${Device.laptop} {
            border: 1px solid var(--secondary);
            box-shadow: var(--shadow-secondary);
            backdrop-filter: none;
        }
    }
`;

const Transition = transition.div.attrs({
    unmountOnExit: true,
    timeout: {
        enter: 300,
        exit: 200,
    },
})`
    position: absolute;
    top: 1px;
    right: 1px;
    bottom: 1px;
    left: 1px;

    &:enter {
        opacity: 0;
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
        transform: translateY(-1rem);
        transition: 0.2s ease-in;
    }
`;

const Home = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    justify-items: center;
    gap: 1rem;

    h3 {
        color: var(--on-background-variant);
    }
`;

type ComponentProps = {
    location: Location;
    current: Data;
    setCurrent: (current: any) => void;
};

function Routes({ location, current, setCurrent }: ComponentProps) {
    const { response, loading } = useAxios({
        url: location.pathname,
        omit:
            `/${current.url?.split(/\//)[4]}/${
                current.url?.split(/\//)[5]
            }/` === location.pathname
                ? true
                : false,
    });

    useEffect(() => {
        setCurrent(response);
    }, [response, setCurrent]);

    return (
        <Container home={location.pathname === "/" ? true : false}>
            <TransitionGroup component={"div"}>
                <Transition key={location.key}>
                    <Switch key={location.key} location={location}>
                        <Route
                            exact
                            path="/"
                            render={() => (
                                <Home>
                                    <h1>Star Wars</h1>
                                    <h3>database</h3>
                                </Home>
                            )}
                        />
                        <Route
                            path="/people/:id"
                            render={() => (
                                <Person
                                    key={current.name}
                                    data={{
                                        name: current.name || "",
                                        height: current.height || "",
                                        mass: current.mass || "",
                                        hair_color: current.hair_color || "",
                                        skin_color: current.skin_color || "",
                                        eye_color: current.eye_color || "",
                                        birth_year: current.birth_year || "",
                                        gender: current.gender || "",
                                        homeworld: current.homeworld || "",
                                        films: current.films || [""],
                                        species: current.species || [""],
                                        vehicles: current.vehicles || [""],
                                        starships: current.starships || [""],
                                        created: current.created,
                                        edited: current.edited,
                                        url: current.url,
                                    }}
                                    setCurrent={setCurrent}
                                    loading={loading}
                                />
                            )}
                        />
                        <Route
                            path="/planets/:id"
                            render={() => (
                                <Planet
                                    key={current.name}
                                    data={{
                                        name: current.name || "",
                                        rotation_period:
                                            current.rotation_period || "",
                                        orbital_period:
                                            current.orbital_period || "",
                                        diameter: current.diameter || "",
                                        climate: current.climate || "",
                                        gravity: current.gravity || "",
                                        terrain: current.terrain || "",
                                        surface_water:
                                            current.surface_water || "",
                                        population: current.population || "",
                                        residents: current.residents || [""],
                                        films: current.films || [""],
                                        created: current.created,
                                        edited: current.edited,
                                        url: current.url,
                                    }}
                                    setCurrent={setCurrent}
                                    loading={loading}
                                />
                            )}
                        />
                        <Route
                            path="/films/:id"
                            render={() => (
                                <Film
                                    key={current.title}
                                    data={{
                                        title: current.title || "",
                                        episode_id: current.episode_id || 0,
                                        opening_crawl:
                                            current.opening_crawl || "",
                                        director: current.director || "",
                                        producer: current.producer || "",
                                        release_date:
                                            current.release_date || "",
                                        characters: current.characters || [""],
                                        planets: current.planets || [""],
                                        species: current.species || [""],
                                        vehicles: current.vehicles || [""],
                                        starships: current.starships || [""],
                                        created: current.created,
                                        edited: current.edited,
                                        url: current.url,
                                    }}
                                    setCurrent={setCurrent}
                                    loading={loading}
                                />
                            )}
                        />
                        <Route
                            path="/species/:id"
                            render={() => (
                                <Specie
                                    key={current.name}
                                    data={{
                                        name: current.name || "",
                                        classification:
                                            current.classification || "",
                                        designation: current.designation || "",
                                        average_height:
                                            current.average_height || "",
                                        skin_colors: current.skin_colors || "",
                                        hair_colors: current.hair_colors || "",
                                        eye_colors: current.eye_colors || "",
                                        average_lifespan:
                                            current.average_lifespan || "",
                                        homeworld: current.homeworld || "",
                                        language: current.language || "",
                                        people: current.films || [""],
                                        films: current.films || [""],
                                        created: current.created,
                                        edited: current.edited,
                                        url: current.url,
                                    }}
                                    setCurrent={setCurrent}
                                    loading={loading}
                                />
                            )}
                        />
                        <Route
                            path="/vehicles/:id"
                            render={() => (
                                <Vehicle
                                    key={current.name}
                                    data={{
                                        name: current.name || "",
                                        model: current.model || "",
                                        manufacturer:
                                            current.manufacturer || "",
                                        cost_in_credits:
                                            current.cost_in_credits || "",
                                        length: current.length || "",
                                        max_atmosphering_speed:
                                            current.max_atmosphering_speed ||
                                            "",
                                        crew: current.crew || "",
                                        passengers: current.passengers || "",
                                        cargo_capacity:
                                            current.cargo_capacity || "",
                                        consumables: current.consumables || "",
                                        vehicle_class:
                                            current.vehicle_class || "",
                                        pilots: current.pilots || [""],
                                        films: current.films || [""],
                                        created: current.created,
                                        edited: current.edited,
                                        url: current.url,
                                    }}
                                    setCurrent={setCurrent}
                                    loading={loading}
                                />
                            )}
                        />
                        <Route
                            path="/starships/:id"
                            render={() => (
                                <Starship
                                    key={current.name}
                                    data={{
                                        name: current.name || "",
                                        model: current.model || "",
                                        manufacturer:
                                            current.manufacturer || "",
                                        cost_in_credits:
                                            current.cost_in_credits || "",
                                        length: current.length || "",
                                        max_atmosphering_speed:
                                            current.max_atmosphering_speed ||
                                            "",
                                        crew: current.crew || "",
                                        passengers: current.passengers || "",
                                        cargo_capacity:
                                            current.cargo_capacity || "",
                                        consumables: current.consumables || "",
                                        hyperdrive_rating:
                                            current.hyperdrive_rating || "",
                                        MGLT: current.MGLT || "",
                                        starship_class:
                                            current.starship_class || "",
                                        pilots: current.pilots || [""],
                                        films: current.films || [""],
                                        created: current.created,
                                        edited: current.edited,
                                        url: current.url,
                                    }}
                                    setCurrent={setCurrent}
                                    loading={loading}
                                />
                            )}
                        />
                    </Switch>
                </Transition>
            </TransitionGroup>
        </Container>
    );
}

export default Routes;
