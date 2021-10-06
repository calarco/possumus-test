import Article from "components/Article";
import Label from "components/Label";
import List from "components/List";

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
    setCurrent: (current: any) => void;
    loading: boolean;
};

function Film({ data, setCurrent, loading }: ComponentProps) {
    return (
        <Article
            title={loading ? "" : data.title}
            subtitle={`Episode ${data.episode_id}`}
        >
            <Label label="OPENING CRAWL" length={3} loading={loading}>
                <p>{data.opening_crawl}</p>
            </Label>
            <Label label="DIRECTOR" loading={loading}>
                <p>{data.director}</p>
            </Label>
            <Label label="PRODUCER" loading={loading}>
                <p>{data.producer}</p>
            </Label>
            <Label label="RELEASE DATE" loading={loading}>
                <p>{data.release_date}</p>
            </Label>
            {data.characters[0] && (
                <List
                    label="CHARACTERS"
                    list={loading ? [""] : data.characters}
                    setCurrent={setCurrent}
                />
            )}
            {data.planets[0] && (
                <List
                    label="PLANETS"
                    list={loading ? [""] : data.planets}
                    setCurrent={setCurrent}
                />
            )}
            {data.species[0] && (
                <List
                    label="SPECIES"
                    list={loading ? [""] : data.species}
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

export default Film;
