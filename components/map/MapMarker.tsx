"use client";

import { Marker } from "react-leaflet";
import L from "leaflet";

import { Protest } from "@/types/protest";
import { useMapContext } from "@/context/MapContext";

type Props = {
    protest: Protest;
};

function getMarkerColor(status: string) {
    switch (status.toLowerCase()) {
        case "active":
            return "red";
        case "upcoming":
            return "orange";
        case "completed":
            return "green";
        default:
            return "blue";
    }
}

export default function MapMarker({ protest }: Props) {
    const {
        setSelectedProtest,
        setMapCenter,
        setMapZoom,
    } = useMapContext();

    const color = getMarkerColor(protest.status);

    const icon = new L.Icon({
        iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-${color}.png`,
        shadowUrl:
            "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
    });

    return (
        <Marker
            position={[protest.latitude, protest.longitude]}
            icon={icon}
            eventHandlers={{
                click: () => {
                    // Update selected protest
                    setSelectedProtest(protest);

                    // Move map to this protest
                    setMapCenter([
                        protest.latitude,
                        protest.longitude,
                    ]);

                    // Zoom in
                    setMapZoom(12);
                },
            }}
        />
    );
}