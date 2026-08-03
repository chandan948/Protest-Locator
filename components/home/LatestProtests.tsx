"use client";

import { useMapContext } from "@/context/MapContext";
import { protests } from "@/lib/protests";

import {
    ArrowUpRight,
    Clock3,
    MapPin,
    Users,
} from "lucide-react";

export default function LatestProtests() {
    const {
        setSelectedProtest,
        setMapCenter,
        setMapZoom,
    } = useMapContext();

    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-6">

                {/* Header */}
                <div className="mb-12 flex items-center justify-between">

                    <div>
                        <h2 className="text-4xl font-bold text-slate-900">
                            Latest Protest Updates
                        </h2>

                        <p className="mt-2 text-slate-600">
                            Stay informed with the most recent verified activity.
                        </p>
                    </div>

                    <button className="hidden items-center gap-2 rounded-xl border border-slate-200 px-5 py-3 font-semibold transition hover:bg-slate-50 md:flex">
                        View All
                        <ArrowUpRight size={18} />
                    </button>

                </div>

                {/* Cards */}
                <div className="grid gap-6 lg:grid-cols-3">

                    {protests.map((item) => (

                        <div
                            key={item.id}
                            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >

                            {/* Status */}
                            <div className="mb-5 flex items-center justify-between">

                                <div className="flex items-center gap-3">

                                    <div
                                        className={`h-4 w-4 rounded-full ${item.status === "Active"
                                                ? "bg-red-500"
                                                : item.status === "Upcoming"
                                                    ? "bg-yellow-500"
                                                    : "bg-green-500"
                                            }`}
                                    />

                                    <span className="font-semibold text-slate-700">
                                        {item.status}
                                    </span>

                                </div>

                                <Clock3
                                    size={18}
                                    className="text-slate-400"
                                />

                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-slate-900">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="mt-3 line-clamp-2 text-sm text-slate-600">
                                {item.description}
                            </p>

                            {/* Location */}
                            <div className="mt-6 flex items-center gap-2 text-slate-600">
                                <MapPin size={18} />
                                {item.city}, {item.state}
                            </div>

                            {/* Crowd */}
                            <div className="mt-3 flex items-center gap-2 text-slate-600">
                                <Users size={18} />
                                {item.crowdSize} Participants
                            </div>

                            {/* Footer */}
                            <div className="mt-6 flex items-center justify-between border-t pt-5">

                                <span className="text-sm text-slate-500">
                                    {item.startTime}
                                </span>

                                <button
                                    onClick={() => {
                                        setSelectedProtest(item);

                                        setMapCenter([
                                            item.latitude,
                                            item.longitude,
                                        ]);

                                        setMapZoom(12);
                                    }}
                                    className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                                >
                                    View Details
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}