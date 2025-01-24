//libraries
import React, { FC } from "react";
import L, { divIcon, Icon } from "leaflet";
import { Marker, Popup } from "react-leaflet";

//feature libraries
import { Station } from "../types/StationData";

//-------------------------------------------------------------------

interface Props {
    station: Station;
}

//-------------------------------------------------------------------

export const StationMarker: FC<Props> = ({ station }) => {
    if (station.longitude === undefined || station.latitude === undefined) return;

    const icon = L.divIcon({
        html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M256 0c17.7 0 32 14.3 32 32l0 34.7C368.4 80.1 431.9 143.6 445.3 224l34.7 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-34.7 0C431.9 368.4 368.4 431.9 288 445.3l0 34.7c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-34.7C143.6 431.9 80.1 368.4 66.7 288L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l34.7 0C80.1 143.6 143.6 80.1 224 66.7L224 32c0-17.7 14.3-32 32-32zM128 256a128 128 0 1 0 256 0 128 128 0 1 0 -256 0zm128-80a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"/></svg>`,
        className: "map-marker-icon",
        iconSize: [20, 20]
    });

    return (
        <Marker
            position={[station.latitude, station.longitude]}
            icon={icon}>
            <Popup>
                <h1> {station.longname} </h1>
                <p> {station.timeseries[0].currentMeasurement.value} </p>
            </Popup>
        </Marker>
    )
}