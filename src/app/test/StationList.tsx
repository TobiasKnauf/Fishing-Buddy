import { FC } from "react";
import { Station } from "../lib/StationData";

interface StationListProps {
    stations: Station[];
}

export const StationList: FC<StationListProps> = ({ stations }) => {
    return (
        <ul>
            {stations.map((station) => (
                <li key={station.uuid}>{station.longname},{station.latitude},{station.longitude}</li>
            ))}
        </ul>
    );
};