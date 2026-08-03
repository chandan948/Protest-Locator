"use client";

import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { useMapContext } from "@/context/MapContext";

export default function MapController() {
    const map = useMap();

    const {
        mapCenter,
        mapZoom,
    } = useMapContext();

    useEffect(() => {
        map.flyTo(mapCenter, mapZoom, {
            animate: true,
            duration: 1.5,
        });
    }, [mapCenter, mapZoom, map]);

    return null;
}