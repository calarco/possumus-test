import Label from "components/Label";
import List from "components/List";

type ComponentProps = {
    data: Data;
    setCurrent: (current: any) => void;
};

function Person({ data, setCurrent }: ComponentProps) {
    return (
        <>
            <Label label="HEIGHT (cm)">
                <p>{data.height}</p>
            </Label>
            <Label label="HAIR COLOR">
                <p>{data.hair_color}</p>
            </Label>
            <Label label="EYE COLOR">
                <p>{data.eye_color}</p>
            </Label>
            <Label label="SKIN COLOR">
                <p>{data.skin_color}</p>
            </Label>
            <Label label="MASS (kg)">
                <p>{data.mass}</p>
            </Label>
            <Label label="BIRTH YEAR">
                <p>{data.birth_year}</p>
            </Label>
            <Label label="GENDER">
                <p>{data.gender}</p>
            </Label>
            {data.homeworld && (
                <List
                    label="HOMEWORLD"
                    list={[data.homeworld]}
                    setCurrent={setCurrent}
                />
            )}
            {data.species && data.species[0] && (
                <List
                    label="SPECIES"
                    list={data.species}
                    setCurrent={setCurrent}
                />
            )}
            {data.films && data.films[0] && (
                <List label="FILMS" list={data.films} setCurrent={setCurrent} />
            )}
            {data.vehicles && data.vehicles[0] && (
                <List
                    label="VEHICLES"
                    list={data.vehicles}
                    setCurrent={setCurrent}
                />
            )}
            {data.starships && data.starships[0] && (
                <List
                    label="STARSHIPS"
                    list={data.starships}
                    setCurrent={setCurrent}
                />
            )}
        </>
    );
}

export default Person;
