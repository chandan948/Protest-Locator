"use client";

import {
    createContext,
    useContext,
    useState,
    ReactNode,
} from "react";

import { Protest } from "@/types/protest";

type MapContextType = {
    selectedProtest: Protest | null;
    setSelectedProtest: (protest: Protest | null) => void;

    mapCenter: [number, number];
    setMapCenter: (center: [number, number]) => void;

    mapZoom: number;
    setMapZoom: (zoom: number) => void;
};

const MapContext = createContext<MapContextType | undefined>(
    undefined
);

export function MapProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [selectedProtest, setSelectedProtest] =
        useState<Protest | null>(null);

    const [mapCenter, setMapCenter] = useState<[number, number]>([
        22.9734,
        78.6569,
    ]);

    const [mapZoom, setMapZoom] = useState(5);

    return (
        <MapContext.Provider
            value={{
                selectedProtest,
                setSelectedProtest,

                mapCenter,
                setMapCenter,

                mapZoom,
                setMapZoom,
            }}
        >
            {children}
        </MapContext.Provider>
    );
}

export function useMapContext() {
    const context = useContext(MapContext);

    if (!context) {
        throw new Error(
            "useMapContext must be used inside MapProvider"
        );
    }

    return context;
}