import Article from "components/Article";
import Label from "components/Label";
import List from "components/List";

type ComponentProps = {
    data: {
        name: string;
        rotation_period: string;
        orbital_period: string;
        diameter: string;
        climate: string;
        gravity: string;
        terrain: string;
        surface_water: string;
        population: string;
        residents: string[];
        films: string[];
        created: string;
        edited: string;
        url: string;
    };
    setCurrent: (current: any) => void;
    loading: boolean;
};

function Planet({ data, setCurrent, loading }: ComponentProps) {
    return (
        <Article title={loading ? "" : data.name}>
            <Label label="ROTATION PERIOD" loading={loading}>
                <p>{data.rotation_period}</p>
            </Label>
            <Label label="ORBITAL PERIOD" loading={loading}>
                <p>{data.orbital_period}</p>
            </Label>
            <Label label="DIAMETER" loading={loading}>
                <p>{data.diameter}</p>
            </Label>
            <Label label="CLIMATE" loading={loading}>
                <p>{data.climate}</p>
            </Label>
            <Label label="GRAVITY" loading={loading}>
                <p>{data.gravity}</p>
            </Label>
            <Label label="TERRAIN" loading={loading}>
                <p>{data.terrain}</p>
            </Label>
            <Label label="SURFACE WATER" loading={loading}>
                <p>{data.surface_water}</p>
            </Label>
            <Label label="POPULATION" loading={loading}>
                <p>{data.population}</p>
            </Label>
            {data.residents[1] && (
                <List
                    label="RESIDENTS"
                    list={loading ? [""] : data.residents}
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

export default Planet;
