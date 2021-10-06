import Article from "components/Article";
import Label from "components/Label";
import List from "components/List";

type ComponentProps = {
    data: {
        name: string;
        height: string;
        mass: string;
        hair_color: string;
        skin_color: string;
        eye_color: string;
        birth_year: string;
        gender: string;
        homeworld: string;
        films: string[];
        species: string[];
        vehicles: string[];
        starships: string[];
        created: string;
        edited: string;
        url: string;
    };
    setCurrent: (current: any) => void;
    loading: boolean;
};

function Person({ data, setCurrent, loading }: ComponentProps) {
    return (
        <Article title={loading ? "" : data.name}>
            <Label label="HEIGHT (cm)" loading={loading}>
                <p>{data.height}</p>
            </Label>
            <Label label="HAIR COLOR" loading={loading}>
                <p>{data.hair_color}</p>
            </Label>
            <Label label="EYE COLOR" loading={loading}>
                <p>{data.eye_color}</p>
            </Label>
            <Label label="SKIN COLOR" loading={loading}>
                <p>{data.skin_color}</p>
            </Label>
            <Label label="MASS (kg)" loading={loading}>
                <p>{data.mass}</p>
            </Label>
            <Label label="BIRTH YEAR" loading={loading}>
                <p>{data.birth_year}</p>
            </Label>
            <Label label="GENDER" loading={loading}>
                <p>{data.gender}</p>
            </Label>
            <List
                label="HOMEWORLD"
                list={loading ? [""] : [data.homeworld]}
                setCurrent={setCurrent}
            />
            {data.species[0] && (
                <List
                    label="SPECIES"
                    list={loading ? [""] : data.species}
                    setCurrent={setCurrent}
                />
            )}
            {data.films[0] && (
                <List
                    label="FILMS"
                    list={loading ? [""] : data.films}
                    setCurrent={setCurrent}
                />
            )}
            {data.vehicles[0] && (
                <List
                    label="VEHICLES"
                    list={loading ? [""] : data.vehicles}
                    setCurrent={setCurrent}
                />
            )}
            {data.starships[0] && (
                <List
                    label="STARSHIPS"
                    list={loading ? [""] : data.starships}
                    setCurrent={setCurrent}
                />
            )}
        </Article>
    );
}

export default Person;
