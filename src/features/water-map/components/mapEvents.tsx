//libraries
import { useMapEvents } from "react-leaflet";
import { LatLng, LeafletEvent, Map } from "leaflet";

//feature libraries
import { GetStationsByCoords } from "../api/PegelOnlineUtils";
import { Station } from "../types/StationData";
import '../utils/leafletUtils'


//-------------------------------------------------------------------

interface EventProps {
    mapRef: Map | null;

    //callback events
    onStationUpdate: (stations: Station[]) => void;
}

//-------------------------------------------------------------------

export function MapEvents({ mapRef, onStationUpdate }: EventProps) {
    if (!mapRef) return;

    const bounds = mapRef.getBounds();
    const mapRadius = mapRef.distance(bounds.getNorthWest(), bounds.getNorthEast()) / 1.5;

    const updateStations = async (e: LeafletEvent) => {

        const data = await GetStationsByCoords(e.target.getCenter(), mapRadius, mapRef);
        onStationUpdate(data);
    }

    let startPos: LatLng;

    useMapEvents({
        dragstart: (e) => {
            startPos = e.target.getCenter();
        },
        dragend: (e) => {
            updateStations(e);
        },
        drag: (e) => {
            const currentPos = e.target.getCenter();

            if (!startPos?.isValid() || !currentPos?.isValid()) return;
            if (startPos.distanceTo(currentPos) < mapRadius) return;

            updateStations(e);

            startPos = e.target.getCenter();

            console.log("Test");
        },
        zoom: (e) => {
            updateStations(e);
        },
        // zoomlevelschange: handleMapChange,
    })
    return null;
}

