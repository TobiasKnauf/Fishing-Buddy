import { useMapEvents } from "react-leaflet";
import { LeafletEvent, Map } from "leaflet";
import { GetStationsByCoords } from "../lib/RetrieveData";
import { Station } from "../lib/StationData";

interface EventProps {
    mapRef: Map | null;

    //callback events
    onStationUpdate: (stations: Station[]) => void;
}

export function MapEvents({ mapRef, onStationUpdate }: EventProps) {
    const handleMapChange = async (e: LeafletEvent) => {
        if (!mapRef) return;

        const coords = e.target.getCenter();
        const bounds = mapRef.getBounds();
        const distance = mapRef.distance(bounds.getNorthWest(), bounds.getNorthEast()) / 2;

        const data = await GetStationsByCoords(coords, distance, mapRef);
        onStationUpdate(data);
    }

    useMapEvents({
        dragend: handleMapChange,
        // zoomlevelschange: handleMapChange,
        zoom: handleMapChange,
    })
    return null;
}