"use client"

//styles
import 'leaflet/dist/leaflet.css';
import "../styles/leafletstyles.css"

//libraries
import { useCallback, useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { Map } from "leaflet";

//feature libraries
import { GetStations } from "../api/PegelOnlineUtils";
import { Station } from "../types/StationData";

//components
import { StationMarker } from "./stationMarker";
import { MapEvents } from "./mapEvents";

//-------------------------------------------------------------------

export default function WaterMap() {
    const mapRef = useRef<Map>(null);
    const [stations, setStations] = useState<Station[]>([]);

    const latitude = 51.75695267540021;
    const longitude = 6.395692160228798;

    useEffect(() => {
        async function fetchInitialStations() {
            const data = await GetStations();
            setStations(data);
        }
        fetchInitialStations();
    }, []);

    const handleStationUpdate = useCallback((stations: Station[]) => {
        setStations(stations);
    }, []);

    return (
        <MapContainer center={[latitude, longitude]} zoom={9} minZoom={9} maxZoom={13} scrollWheelZoom={true} ref={mapRef}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {
                mapRef.current != null &&
                <MapEvents onStationUpdate={handleStationUpdate} mapRef={mapRef?.current} />

            }
            <div id="stations-markers">
                {
                    stations.map((station) => (
                        <StationMarker station={station} key={`${station.uuid} marker`} />
                    ))
                }
            </div>
        </MapContainer>
    )
}