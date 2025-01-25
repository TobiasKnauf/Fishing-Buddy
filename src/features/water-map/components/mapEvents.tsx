//libraries
import { useMapEvents } from "react-leaflet";
import { LatLng, LeafletEvent, Map } from "leaflet";

//feature libraries
import '../utils/leafletUtils'
import { GetStationsByCoords } from "../api/pegelOnlineAccess";
import { Station } from "../types/StationData";
import { ReduceStations } from "../utils/pegelOnlineUtils";


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
    const mapDiameter = mapRef.distance(bounds.getNorthWest(), bounds.getNorthEast());
    const mapRadius = mapDiameter / 1.5;

    const updateStations = async (e: LeafletEvent) => {

        const data = await GetStationsByCoords(e.target.getCenter(), mapRadius, mapRef);
        const reduced = ReduceStations(data, mapDiameter / 100);
        onStationUpdate(reduced);
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
            if (startPos.distanceTo(currentPos) < mapDiameter / 2) return;

            updateStations(e);
            startPos = e.target.getCenter();
        },
        zoomend: (e) => {
            updateStations(e);
        },
        zoomstart: (e) => {
            updateStations(e);
        }
        // zoomlevelschange: handleMapChange,
    })

    return null;
}

