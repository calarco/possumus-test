import Label from "components/Label";
import Item from "components/Item";

type ComponentProps = {
    data: Data;
    setCurrent: (current: any) => void;
};

function Planet({ data, setCurrent }: ComponentProps) {
    return (
        <>
            <Label label="ROTATION PERIOD">
                <p>{data.rotation_period}</p>
            </Label>
            <Label label="ORBITAL PERIOD">
                <p>{data.orbital_period}</p>
            </Label>
            <Label label="DIAMETER">
                <p>{data.diameter}</p>
            </Label>
            <Label label="CLIMATE">
                <p>{data.climate}</p>
            </Label>
            <Label label="GRAVITY">
                <p>{data.gravity}</p>
            </Label>
            <Label label="TERRAIN">
                <p>{data.terrain}</p>
            </Label>
            <Label label="SURFACE WATER">
                <p>{data.surface_water}</p>
            </Label>
            <Label label="POPULATION">
                <p>{data.population}</p>
            </Label>
            {data.residents && data.residents[1] && (
                <Label label="RESIDENTS" length={data.residents.length}>
                    <ul>
                        {data.residents.map((url: string) => (
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

export default Planet;
