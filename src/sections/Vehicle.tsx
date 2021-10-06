import Article from "components/Article";
import Label from "components/Label";
import List from "components/List";

type ComponentProps = {
    data: {
        name: string;
        model: string;
        manufacturer: string;
        cost_in_credits: string;
        length: string;
        max_atmosphering_speed: string;
        crew: string;
        passengers: string;
        cargo_capacity: string;
        consumables: string;
        vehicle_class: string;
        pilots: string[];
        films: string[];
        created: string;
        edited: string;
        url: string;
    };
    setCurrent: (current: any) => void;
    loading: boolean;
};

function Vehicle({ data, setCurrent, loading }: ComponentProps) {
    return (
        <Article title={loading ? "" : data.name}>
            <Label label="MODEL" loading={loading}>
                <p>{data.model}</p>
            </Label>
            <Label label="MANUFACTURER" loading={loading}>
                <p>{data.manufacturer}</p>
            </Label>
            <Label label="COST (credits)" loading={loading}>
                <p>{data.cost_in_credits}</p>
            </Label>
            <Label label="LENGTH (m)" loading={loading}>
                <p>{data.length}</p>
            </Label>
            <Label label="MAX ATMOSPHERING SPEED" loading={loading}>
                <p>{data.max_atmosphering_speed}</p>
            </Label>
            <Label label="CREW" loading={loading}>
                <p>{data.crew}</p>
            </Label>
            <Label label="PASSENGERS" loading={loading}>
                <p>{data.passengers}</p>
            </Label>
            <Label label="CARGO CAPACITY" loading={loading}>
                <p>{data.cargo_capacity}</p>
            </Label>
            <Label label="CONSUMABLES" loading={loading}>
                <p>{data.consumables}</p>
            </Label>
            <Label label="VEHICLE CLASS" loading={loading}>
                <p>{data.vehicle_class}</p>
            </Label>
            {data.pilots[1] && (
                <List
                    label="PILOTS"
                    list={loading ? [""] : data.pilots}
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

export default Vehicle;
