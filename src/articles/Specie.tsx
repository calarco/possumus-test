import Label from "components/Label";
import Item from "components/Item";

type ComponentProps = {
    data: Data;
    setCurrent: (current: any) => void;
};

function Specie({ data, setCurrent }: ComponentProps) {
    return (
        <>
            <Label label="CLASSIFICATION">
                <p>{data.classification}</p>
            </Label>
            <Label label="DESIGNATION">
                <p>{data.designation}</p>
            </Label>
            <Label label="AVERAGE HEIGHT (cm)">
                <p>{data.average_height}</p>
            </Label>
            <Label label="SKIN COLORS">
                <p>{data.skin_colors}</p>
            </Label>
            <Label label="HAIR COLORS">
                <p>{data.hair_colors}</p>
            </Label>
            <Label label="EYE COLORS">
                <p>{data.eye_colors}</p>
            </Label>
            <Label label="AVERAGE LIFESPAN">
                <p>{data.average_lifespan}</p>
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
            <Label label="LANGUAGE">
                <p>{data.language}</p>
            </Label>
            {data.people && data.people[1] && (
                <Label label="PEOPLE" length={data.people.length}>
                    <ul>
                        {data.people.map((url: string) => (
                            <Item key={url} url={url} setCurrent={setCurrent} />
                        ))}
                    </ul>
                </Label>
            )}
            {data.films && data.films[1] && (
                <Label label="FILMS" length={data.films.length}>
                    <ul>
                        {data.films.map((url: string) => (
                            <Item key={url} url={url} setCurrent={setCurrent} />
                        ))}
                    </ul>
                </Label>
            )}
        </>
    );
}

export default Specie;
