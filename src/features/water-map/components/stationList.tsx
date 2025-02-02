//libraries
import { FC } from "react";

//feature libraries
import { Station } from "../types/StationData";
import { StationMarker } from "./stationMarker";

//-------------------------------------------------------------------

interface Props {
    stations: Station[];
}

//-------------------------------------------------------------------


export default function StationList({ stations }: Props) {
    return (
        stations.map((station) => (
            <StationMarker station={station} key={`${station.uuid} marker`} />
        ))
    );
}