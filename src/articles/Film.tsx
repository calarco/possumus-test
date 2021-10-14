import Label from "components/Label";
import Item from "components/Item";

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
                <Label label="CHARACTERS" length={data.characters.length}>
                    <ul>
                        {data.characters.map((url: string) => (
                            <Item key={url} url={url} setCurrent={setCurrent} />
                        ))}
                    </ul>
                </Label>
            )}
            {data.planets && data.planets[0] && (
                <Label label="PLANETS" length={data.planets.length}>
                    <ul>
                        {data.planets.map((url: string) => (
                            <Item key={url} url={url} setCurrent={setCurrent} />
                        ))}
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

export default Film;
