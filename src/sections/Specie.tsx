import Article from "components/Article";
import Label from "components/Label";
import List from "components/List";

type ComponentProps = {
    data: {
        name: string;
        classification: string;
        designation: string;
        average_height: string;
        skin_colors: string;
        hair_colors: string;
        eye_colors: string;
        average_lifespan: string;
        homeworld: string;
        language: string;
        people: string[];
        films: string[];
        created: string;
        edited: string;
        url: string;
    };
    setCurrent: (current: any) => void;
    loading: boolean;
};

function Specie({ data, setCurrent, loading }: ComponentProps) {
    return (
        <Article title={loading ? "" : data.name}>
            <Label label="CLASSIFICATION" loading={loading}>
                <p>{data.classification}</p>
            </Label>
            <Label label="DESIGNATION" loading={loading}>
                <p>{data.designation}</p>
            </Label>
            <Label label="AVERAGE HEIGHT (cm)" loading={loading}>
                <p>{data.average_height}</p>
            </Label>
            <Label label="SKIN COLORS" loading={loading}>
                <p>{data.skin_colors}</p>
            </Label>
            <Label label="HAIR COLORS" loading={loading}>
                <p>{data.hair_colors}</p>
            </Label>
            <Label label="EYE COLORS" loading={loading}>
                <p>{data.eye_colors}</p>
            </Label>
            <Label label="AVERAGE LIFESPAN" loading={loading}>
                <p>{data.average_lifespan}</p>
            </Label>
            {data.homeworld && (
                <List
                    label="HOMEWORLD"
                    list={loading ? [""] : [data.homeworld]}
                    setCurrent={setCurrent}
                />
            )}
            <Label label="LANGUAGE" loading={loading}>
                <p>{data.language}</p>
            </Label>
            {data.people[1] && (
                <List
                    label="PEOPLE"
                    list={loading ? [""] : data.people}
                    setCurrent={setCurrent}
                />
            )}
            {data.films[1] && (
                <List
                    label="FILMS"
                    list={loading ? [""] : data.films}
                    setCurrent={setCurrent}
                />
            )}
        </Article>
    );
}

export default Specie;
