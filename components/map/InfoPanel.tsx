"use client";

import {
    MapPin,
    Users,
    Clock,
    ShieldCheck,
} from "lucide-react";

import { useMapContext } from "@/context/MapContext";

export default function InfoPanel() {
    const { selectedProtest } = useMapContext();

    if (!selectedProtest) {
        return (
            <aside className="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-full flex-col items-center justify-center text-center">
                    <ShieldCheck className="mb-5 text-blue-600" size={48} />

                    <h2 className="text-xl font-bold">
                        No Protest Selected
                    </h2>

                    <p className="mt-3 text-slate-500">
                        Click any marker on the map to view its details.
                    </p>
                </div>
            </aside>
        );
    }

    return (
        <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="mb-4">
                <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-600">
                    {selectedProtest.status}
                </span>
            </div>

            <h2 className="text-2xl font-bold text-slate-900">
                {selectedProtest.title}
            </h2>

            <p className="mt-2 text-slate-600">
                {selectedProtest.description}
            </p>

            <div className="mt-8 space-y-4">

                <div className="flex items-center gap-3">
                    <MapPin className="text-blue-600" size={20} />
                    <span>
                        {selectedProtest.city}, {selectedProtest.state}
                    </span>
                </div>

                <div className="flex items-center gap-3">
                    <Users className="text-blue-600" size={20} />
                    <span>
                        {selectedProtest.crowdSize} Participants
                    </span>
                </div>

                <div className="flex items-center gap-3">
                    <Clock className="text-blue-600" size={20} />
                    <span>{selectedProtest.startTime}</span>
                </div>

            </div>

        </aside>
    );
}