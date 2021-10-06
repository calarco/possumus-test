import Label from "components/Label";
import List from "components/List";

type ComponentProps = {
    data: Data;
    setCurrent: (current: any) => void;
};

function Film({ data, setCurrent }: ComponentProps) {
    return (
        <>
            <Label label="OPENING CRAWL" length={3}>
                <p>{data.opening_crawl}</p>
            </Label>
            <Label label="DIRECTOR">
                <p>{data.director}</p>
            </Label>
            <Label label="PRODUCER">
                <p>{data.producer}</p>
            </Label>
            <Label label="RELEASE DATE">
                <p>{data.release_date}</p>
            </Label>
            {data.characters && data.characters[0] && (
                <List
                    label="CHARACTERS"
                    list={data.characters}
                    setCurrent={setCurrent}
                />
            )}
            {data.planets && data.planets[0] && (
                <List
                    label="PLANETS"
                    list={data.planets}
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

export default Film;
