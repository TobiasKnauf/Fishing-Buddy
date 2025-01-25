import { LatLng } from "leaflet";

import { Station } from "../types/StationData";

//-------------------------------------------------------------------

export function GetStationsInArea(stationToCheck: Station, stations: Station[], distance: number): Station[] {
    const mainCoords = new LatLng(stationToCheck.latitude, stationToCheck.longitude);
    let stationsInArea = new Array<Station>;

    stations.map((station) => {
        const coords = new LatLng(station.latitude, station.longitude);

        if (mainCoords.distanceTo(coords) <= distance) {
            stationsInArea.push(station);
        }
    });

    return stationsInArea;
}

//-------------------------------------------------------------------

export function ReduceStations(stations: Station[], distancePerStation: number): Station[] {
    let stationsChecked = new Array<Station>;
    let reducedStations = new Array<Station>;

    stations.map((s1) => {
        if (!stationsChecked.includes(s1)) {
            const stationsInArea = GetStationsInArea(s1, stations, distancePerStation);

            stationsInArea.map((s2) => stationsChecked.push(s2));
            reducedStations.push(s1);
        }

        stationsChecked.push(s1);
    });

    return reducedStations;
}

//-------------------------------------------------------------------