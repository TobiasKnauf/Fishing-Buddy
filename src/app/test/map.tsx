import { MapContainer, TileLayer } from "react-leaflet";
import { GetStations } from "../lib/RetrieveData";

import 'leaflet/dist/leaflet.css';
import "./style.css"
import { useEffect, useState } from "react";
import { Station } from "../lib/StationData";
import { StationMarker } from "./stationMarker";

export function MapChart() {
    const [stations, setStations] = useState<Station[]>([]);

    useEffect(() => {
        async function test() {
            const data = await GetStations("Rhein");
            setStations(data);
        }
        test();
    }, []);

    return (
        <div>
            <MapContainer
                style={{ width: "auto", height: "1000px", margin: "2%" }}
                center={[51.75695267540021, 6.395692160228798]}
                zoom={13} scrollWheelZoom={true}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {
                    stations.map((station) => (
                        <StationMarker station={station} key={`${station.uuid} marker`} />
                    ))
                }
            </MapContainer>
        </div>
    )
}

