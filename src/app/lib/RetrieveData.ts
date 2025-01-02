import { Station } from "./StationData";

const fetchUrl = "https://pegelonline.wsv.de/webservices/rest-api/v2/";

export async function GetStations(): Promise<Station[]>;
export async function GetStations(water: string): Promise<Station[]>
export async function GetStations(water?: string): Promise<Station[]> {
    const response = await fetch(`${fetchUrl}stations.json?includeTimeseries=true&includeCurrentMeasurement=true&includeCharacteristicValues=true`);
    const data = await response.json() as Station[];

    if (water === undefined) {
        return data;
    }
    else {
        return data.filter(s => s.water.longname.toLowerCase().includes(water.toLowerCase()));
    }
}