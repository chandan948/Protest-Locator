"use client";

import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
} from "react-leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix marker icons
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function LeafletMap() {
    return (
        <MapContainer
            center={[22.9734, 78.6569]}
            zoom={5}
            scrollWheelZoom
            className="h-[650px] w-full"
        >
            <TileLayer
                attribution="&copy; OpenStreetMap contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[28.6139, 77.209]}>
                <Popup>Delhi Protest</Popup>
            </Marker>

            <Marker position={[19.076, 72.8777]}>
                <Popup>Mumbai Protest</Popup>
            </Marker>

            <Marker position={[12.9716, 77.5946]}>
                <Popup>Bengaluru Protest</Popup>
            </Marker>
        </MapContainer>
    );
}