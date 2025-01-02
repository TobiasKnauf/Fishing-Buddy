import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import "./style.css"

export function MapChart() {
    return (
        <MapContainer center={[51.75695267540021, 6.395692160228798]} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.75695267540021, 6.395692160228798]}>
                <Popup>

                </Popup>
            </Marker>
        </MapContainer>
    )
}