import { LatLng, Map } from "leaflet";
import { Station } from "../types/StationData";

const fetchUrl = "https://pegelonline.wsv.de/webservices/rest-api/v2/";
let stationCache: Station[];

//-------------------------------------------------------------------

export async function GetStations(force?: false): Promise<Station[]> {

    if (force || stationCache == null || stationCache.length == 0) {
        const response = await fetch(`${fetchUrl}stations.json?includeTimeseries=true&includeCurrentMeasurement=true&includeCharacteristicValues=true`);
        const data = await response.json() as Station[];

        stationCache = data;

        return data;
    }

    return stationCache;
}

//-------------------------------------------------------------------

export async function GetStationsByWater(water: string): Promise<Station[]> {
    const data = await GetStations();

    return data.filter(s => s.water.longname.toLowerCase().includes(water.toLowerCase()));
}

//-------------------------------------------------------------------

export async function GetStationsByCoords(coordinates: LatLng, radiusInMeters: number, map: Map | null): Promise<Station[]> {
    if (!map) return [];

    const data = await GetStations();

    return data.filter(s => {
        if (s.latitude && s.longitude) {

            const currStationCoords = new LatLng(s.latitude, s.longitude);

            if (map.distance(currStationCoords, coordinates) <= radiusInMeters)
                return s;
        }
    });
}

//-------------------------------------------------------------------