import Label from "components/Label";
import Item from "components/Item";

type ComponentProps = {
    data: Data;
    setCurrent: (current: any) => void;
};

function Starship({ data, setCurrent }: ComponentProps) {
    return (
        <>
            <Label label="MODEL">
                <p>{data.model}</p>
            </Label>
            <Label label="MANUFACTURER">
                <p>{data.manufacturer}</p>
            </Label>
            <Label label="COST (credits)">
                <p>{data.cost_in_credits}</p>
            </Label>
            <Label label="LENGTH (m)">
                <p>{data.length}</p>
            </Label>
            <Label label="MAX ATMOSPHERING SPEED">
                <p>{data.max_atmosphering_speed}</p>
            </Label>
            <Label label="CREW">
                <p>{data.crew}</p>
            </Label>
            <Label label="PASSENGERS">
                <p>{data.passengers}</p>
            </Label>
            <Label label="CARGO CAPACITY">
                <p>{data.cargo_capacity}</p>
            </Label>
            <Label label="CONSUMABLES">
                <p>{data.consumables}</p>
            </Label>
            <Label label="HYPERDRIVE RATING">
                <p>{data.hyperdrive_rating}</p>
            </Label>
            <Label label="MGLT">
                <p>{data.MGLT}</p>
            </Label>
            <Label label="STARSHIP CLASS">
                <p>{data.starship_class}</p>
            </Label>
            {data.pilots && data.pilots[1] && (
                <Label label="PILOTS" length={data.pilots.length}>
                    <ul>
                        {data.pilots.map((url: string) => (
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

export default Starship;
