"use client";

import { MapContainer, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import { protests } from "@/lib/protests";
import MapMarker from "./MapMarker";
import MapController from "./MapController";
import { useMapContext } from "@/context/MapContext";

// Fix default Leaflet marker icons
const defaultIconPrototype = L.Icon.Default.prototype as {
    _getIconUrl?: unknown;
};
delete defaultIconPrototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function LeafletMap() {
    const { stateFilter, statusFilter, dateFilter } = useMapContext();
    const visibleProtests = protests.filter((protest) => {
        const matchesState = stateFilter === "All States" || protest.state === stateFilter;
        const matchesStatus = statusFilter === "All" || protest.status === statusFilter;
        const matchesDate = !dateFilter || protest.startTime.startsWith(dateFilter);
        return matchesState && matchesStatus && matchesDate;
    });

    return (
        <MapContainer
            center={[22.9734, 78.6569]}
            zoom={5}
            scrollWheelZoom={true}
            className="h-[650px] w-full rounded-2xl"
        >
            {/* OpenStreetMap Tiles */}
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Controls map movement from Context */}
            <MapController />

            {/* Protest Markers */}
            {visibleProtests.map((protest) => (
                <MapMarker
                    key={protest.id}
                    protest={protest}
                />
            ))}
        </MapContainer>
    );
}
