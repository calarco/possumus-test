import Label from "components/Label";
import Item from "components/Item";

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
                <Label label="HOMEWORLD">
                    <ul>
                        <Item
                            key={data.homeworld}
                            url={data.homeworld}
                            setCurrent={setCurrent}
                        />
                    </ul>
                </Label>
            )}
            {data.species && data.species[0] && (
                <Label label="SPECIES" length={data.species.length}>
                    <ul>
                        {data.species.map((url: string) => (
                            <Item key={url} url={url} setCurrent={setCurrent} />
                        ))}
                    </ul>
                </Label>
            )}
            {data.films && data.films[0] && (
                <Label label="FILMS" length={data.films.length}>
                    <ul>
                        {data.films.map((url: string) => (
                            <Item key={url} url={url} setCurrent={setCurrent} />
                        ))}
                    </ul>
                </Label>
            )}
            {data.vehicles && data.vehicles[0] && (
                <Label label="VEHICLES" length={data.vehicles.length}>
                    <ul>
                        {data.vehicles.map((url: string) => (
                            <Item key={url} url={url} setCurrent={setCurrent} />
                        ))}
                    </ul>
                </Label>
            )}
            {data.starships && data.starships[0] && (
                <Label label="STARSHIPS" length={data.starships.length}>
                    <ul>
                        {data.starships.map((url: string) => (
                            <Item key={url} url={url} setCurrent={setCurrent} />
                        ))}
                    </ul>
                </Label>
            )}
        </>
    );
}

export default Person;
