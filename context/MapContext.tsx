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

    stateFilter: string;
    setStateFilter: (state: string) => void;
    statusFilter: string;
    setStatusFilter: (status: string) => void;
    dateFilter: string;
    setDateFilter: (date: string) => void;
    resetFilters: () => void;
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
    const [stateFilter, setStateFilter] = useState("All States");
    const [statusFilter, setStatusFilter] = useState("All");
    const [dateFilter, setDateFilter] = useState("");

    const resetFilters = () => {
        setStateFilter("All States");
        setStatusFilter("All");
        setDateFilter("");
    };

    return (
        <MapContext.Provider
            value={{
                selectedProtest,
                setSelectedProtest,

                mapCenter,
                setMapCenter,

                mapZoom,
                setMapZoom,

                stateFilter,
                setStateFilter,
                statusFilter,
                setStatusFilter,
                dateFilter,
                setDateFilter,
                resetFilters,
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
