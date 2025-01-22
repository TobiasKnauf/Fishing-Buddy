import React from "react";
import { Marker, Popup } from "react-leaflet";
import { Station } from "../types/StationData";
import { FC } from "react";

interface Props {
    station: Station;
}

export const StationMarker: FC<Props> = ({ station }) => {
    if (station.longitude === undefined || station.latitude === undefined) return;

    return (
        <Marker position={[station.latitude, station.longitude]}>
            <Popup>
                <h1> {station.longname} </h1>
                <p> {station.timeseries[0].currentMeasurement.value} </p>
            </Popup>
        </Marker>
    )
}