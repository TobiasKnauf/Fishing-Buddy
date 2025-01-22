//libraries
import { FC } from "react";

//feature libraries
import { Station } from "../types/StationData";

interface Props {
    stations: Station[];
}

export const StationList: FC<Props> = ({ stations }) => {
    return (
        <ul>
            {stations.map((station) => (
                <li key={station.uuid}>{station.longname},{station.latitude},{station.longitude}</li>
            ))}
        </ul>
    );
};
