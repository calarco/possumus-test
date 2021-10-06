import Label from "components/Label";
import List from "components/List";

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
                <List
                    label="HOMEWORLD"
                    list={[data.homeworld]}
                    setCurrent={setCurrent}
                />
            )}
            <Label label="LANGUAGE">
                <p>{data.language}</p>
            </Label>
            {data.people && data.people[1] && (
                <List
                    label="PEOPLE"
                    list={data.people}
                    setCurrent={setCurrent}
                />
            )}
            {data.films && data.films[1] && (
                <List label="FILMS" list={data.films} setCurrent={setCurrent} />
            )}
        </>
    );
}

export default Specie;
